


export default {
    background: {
        color: {
            value: "#181818",
        },
    },
    fpsLimit: 90,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 10,
            },
            repulse: {
                distance: 100,
                duration: 0.5,
            },
        },
    },
    particles: {
        color: {
            value: "#fff",
        },
        links: {
            color: "#F00",
            distance: 150,
            enable: true,
            opacity: 0.7,
            width: 2,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 4,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area:800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,

}
