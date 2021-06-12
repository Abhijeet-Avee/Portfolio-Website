import React from 'react';
import Particles from 'react-particles-js';
import ParticleConfig from '../config/particle-config';

function ParticleBackground() {
    return (
            <Particles params={ParticleConfig}
                style={{ 
                    position: 'fixed',
                }}
            ></Particles>
        
    )
}

export default ParticleBackground;
