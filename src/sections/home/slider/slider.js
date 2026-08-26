import { useEffect, useRef, useState } from "react";
import "./slider.css";

import one from "../../../assets/images/slider-1.png";
import two from "../../../assets/images/slider-2.png";
import three from "../../../assets/images/slider-3.png";
import four from "../../../assets/images/slider-4.png";
import five from "../../../assets/images/slider-5.png";
import {Button}  from "../../../components/buttons/buttons";

const PROJECT_IMAGES = [one, two, three, four, five];

const SLOT_HEIGHT = 300;
const GAP = 30;
const STEP = SLOT_HEIGHT + GAP;
const BASE_SCALE = 0.88;
const MAX_SCALE = 1;
const ENTER_RANGE = STEP / 2;
const COLUMN_HEIGHT = 550;
const DURATION = 60000;

const MOBILE_CARD_WIDTH = 200;
const MOBILE_GAP = 30;
const MOBILE_STEP = MOBILE_CARD_WIDTH + MOBILE_GAP;
const MOBILE_INTERVAL = 3500;
const MOBILE_TRANSITION = 1000;

function MobileSlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const n = PROJECT_IMAGES.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % PROJECT_IMAGES.length);
        }, MOBILE_INTERVAL);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="mobile-slider-container">
            <div className="mobile-slider-track">
                {PROJECT_IMAGES.map((src, i) => {
                    const raw = (((i - activeIndex) % n) + n) % n;
                    const offset = raw > n / 2 ? raw - n : raw;

                    let transform;
                    let opacity;
                    let zIndex;

                    if (offset === 0) {
                        transform =
                            "translate(-50%, -50%) translateX(0) scale(1)";
                        opacity = 1;
                        zIndex = 3;
                    } else if (offset === -1 || offset === 1) {
                        transform = `translate(-50%, -50%) translateX(${offset * MOBILE_STEP
                            }px) scale(0.78)`;

                        opacity = 0.65;
                        zIndex = 2;
                    } else {
                        transform = `translate(-50%, -50%) translateX(${offset * MOBILE_STEP
                            }px) scale(0.6)`;

                        opacity = 0;
                        zIndex = 1;
                    }

                    return (
                        <div
                            key={i}
                            className="mobile-slider-card"
                            style={{
                                transform,
                                opacity,
                                zIndex,
                                transition: `transform ${MOBILE_TRANSITION}ms cubic-bezier(0.22, 1, 0.36, 1), opacity ${MOBILE_TRANSITION}ms ease`,
                            }}
                        >
                            <img src={src} alt="" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function WebSlider() {
    const leftSlotRefs = useRef([]);
    const leftImageRefs = useRef([]);

    const rightSlotRefs = useRef([]);
    const rightImageRefs = useRef([]);

    const renderedImages = [
        ...PROJECT_IMAGES,
        ...PROJECT_IMAGES,
    ];

    const leftReferencePoint = COLUMN_HEIGHT * 0.6;
    const rightReferencePoint = COLUMN_HEIGHT * 0.4;

    useEffect(() => {
        const conveyors = [
            {
                slotRefs: leftSlotRefs,
                imageRefs: leftImageRefs,
                direction: "down",
                referencePoint: leftReferencePoint,
            },
            {
                slotRefs: rightSlotRefs,
                imageRefs: rightImageRefs,
                direction: "up",
                referencePoint: rightReferencePoint,
            },
        ];

        const animations = conveyors.map(
            ({
                slotRefs,
                imageRefs,
                direction,
                referencePoint,
            }) => {
                const slots = slotRefs.current;
                const images = imageRefs.current;

                const renderedCount = PROJECT_IMAGES.length * 2;
                const loopDistance = renderedCount * STEP;
                const originalDistance =
                    PROJECT_IMAGES.length * STEP;
                const speed =
                    originalDistance / DURATION;

                const directionSign =
                    direction === "down" ? 1 : -1;

                const positions = Array.from(
                    { length: renderedCount },
                    (_, index) =>
                        (index - PROJECT_IMAGES.length) *
                        STEP
                );

                let lastTime = performance.now();
                let raf;

                const tick = (now) => {
                    let deltaTime = now - lastTime;

                    lastTime = now;

                    if (deltaTime > 50) {
                        deltaTime = 50;
                    }

                    for (
                        let index = 0;
                        index < renderedCount;
                        index++
                    ) {
                        const slot = slots[index];
                        const image = images[index];

                        if (!slot) continue;

                        positions[index] +=
                            speed *
                            deltaTime *
                            directionSign;

                        if (directionSign > 0) {
                            if (
                                positions[index] >
                                COLUMN_HEIGHT
                            ) {
                                positions[index] -=
                                    loopDistance;
                            }
                        } else {
                            if (
                                positions[index] +
                                SLOT_HEIGHT <
                                0
                            ) {
                                positions[index] +=
                                    loopDistance;
                            }
                        }

                        slot.style.transform =
                            `translateY(${positions[index]}px)`;

                        const slotCenter =
                            positions[index] +
                            SLOT_HEIGHT / 2;

                        const distance =
                            Math.abs(
                                slotCenter -
                                referencePoint
                            );

                        const nextScale =
                            distance < ENTER_RANGE
                                ? MAX_SCALE
                                : BASE_SCALE;

                        if (image) {
                            image.style.scale =
                                nextScale;

                            image.style.zIndex =
                                nextScale === MAX_SCALE
                                    ? "2"
                                    : "1";
                        }
                    }

                    raf =
                        requestAnimationFrame(tick);
                };

                raf =
                    requestAnimationFrame(tick);

                return () =>
                    cancelAnimationFrame(raf);
            }
        );

        return () => {
            animations.forEach((cancel) =>
                cancel()
            );
        };
    }, [leftReferencePoint, rightReferencePoint]);

    return (
        <div className="web-slider-container">
            <div className="web-slider-column">
                {renderedImages.map(
                    (src, index) => (
                        <div
                            key={index}
                            ref={(element) => {
                                leftSlotRefs.current[
                                    index
                                ] = element;
                            }}
                            className="web-slider-slot"
                        >
                            <div
                                ref={(element) => {
                                    leftImageRefs.current[
                                        index
                                    ] = element;
                                }}
                                className="web-slider-card"
                            >
                                <img
                                    src={src}
                                    alt=""
                                    draggable={false}
                                />
                            </div>
                        </div>
                    )
                )}
            </div>

            <div className="web-slider-column">
                {renderedImages.map(
                    (src, index) => (
                        <div
                            key={index}
                            ref={(element) => {
                                rightSlotRefs.current[
                                    index
                                ] = element;
                            }}
                            className="web-slider-slot"
                        >
                            <div
                                ref={(element) => {
                                    rightImageRefs.current[
                                        index
                                    ] = element;
                                }}
                                className="web-slider-card"
                            >
                                <img
                                    src={src}
                                    alt=""
                                    draggable={false}
                                />
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default function Slider() {
    const [isMobile, setIsMobile] = useState(
        window.innerWidth < 901
    );

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 901);
        };

        window.addEventListener(
            "resize",
            handleResize
        );

        return () => {
            window.removeEventListener(
                "resize",
                handleResize
            );
        };
    }, []);

    return (
        <section className="slider-section">
            <div className="slider-text">
                <span className="slider-title">
                    READY TO GET STARTED?
                </span>

                <span className="slider-subtitle">
                    Let's turn your ideas into a
                    space you'll enjoy for years.
                </span>

                <span className="slider-question">
                    Planning a project in the GTA?
                </span>

                <Button type="estimate-white">
                    GET A FREE ESTIMATE
                </Button>

            </div>

            <div className="slider-content">
                {isMobile ? (
                    <MobileSlider />
                ) : (
                    <WebSlider />
                )}
            </div>
        </section>
    );
}