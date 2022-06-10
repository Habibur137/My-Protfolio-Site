import React, { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
// import { loadFull } from "tsparticles";

const BackgroundMotion = () => {
  const options = useMemo(() => {
    return {
      background: {
        color: "#0A192F",
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: ["push"],
          },
          onHover: {
            enable: true,
            mode: "repulse",
            parallax: {
              enable: false,
              force: 2,
              smooth: 10,
            },
          },
          resize: true,
        },
        modes: {
          attract: {
            distance: 200,
            duration: 0.4,
            easing: "ease-out-quad",
            factor: 1,
            maxSpeed: 50,
            speed: 1,
          },
          bounce: {
            distance: 200,
          },
          bubble: {
            distance: 200,
            duration: 0.4,
            mix: false,
            divs: {
              distance: 200,
              duration: 0.4,
              mix: false,
              selectors: [],
            },
          },
          connect: {
            distance: 80,
            links: {
              opacity: 0.5,
            },
            radius: 60,
          },
          grab: {
            distance: 100,
            links: {
              blink: false,
              consent: false,
              opacity: 1,
            },
          },
          light: {
            area: {
              gradient: {
                start: {
                  value: "#ffffff",
                },
                stop: {
                  value: "#000000",
                },
              },
              radius: 1000,
            },
            shadow: {
              color: {
                value: "#000000",
              },
              length: 2000,
            },
          },
          push: {
            default: true,
            groups: [],
            quantity: 4,
          },
          remove: {
            quantity: 2,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: "ease-out-quad",
            divs: {
              distance: 200,
              duration: 0.4,
              factor: 100,
              speed: 1,
              maxSpeed: 50,
              easing: "ease-out-quad",
              selectors: [],
            },
          },
          slow: {
            factor: 3,
            radius: 200,
          },
          trail: {
            delay: 0.005,
            pauseOnStop: true,
            quantity: 5,
            particles: {
              color: {
                value: "#ff0000",
                animation: {
                  enable: true,
                  speed: 400,
                  sync: true,
                },
              },
              collisions: {
                enable: false,
              },
              links: {
                enable: true,
              },
              move: {
                outModes: {
                  default: "destroy",
                },
                speed: 2,
              },
              size: {
                value: 5,
                animation: {
                  enable: true,
                  speed: 5,
                  minimumValue: 1,
                  sync: true,
                  startValue: "min",
                  destroy: "max",
                },
              },
            },
          },
        },
      },
      particles: {
        move: {
          enable: true,
          speed: { min: 0.5, max: 2 },
        },
        links: {
          enable: true,
        },
        size: {
          value: { min: 1, max: 4 },
        },
        opecity: {
          value: { min: 0.2, max: 0.6 },
        },
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
    };
  }, []);
  const particlesInit = useCallback((engine) => {
    // loadFull(engine)
    loadSlim(engine);
  }, []);
  return <Particles init={particlesInit} options={options}></Particles>;
};

export default BackgroundMotion;
