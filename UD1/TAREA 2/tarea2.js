        const respuestasCorrectas = {
            1: false, 
            2: true,  
            3: true,  
            4: true,   
            5: false,  
            6: true,   
            7: true   
        };
        
        let aciertos = 0;
        let preguntasRespondidas = 0;
        
        function verificarRespuesta(numPregunta, respuestaUsuario) {
            const pregunta = document.getElementById(`pregunta${numPregunta}`);
            if (pregunta.classList.contains('acierto') || pregunta.classList.contains('error')) {
                return;
            }
            const esCorrecta = (respuestaUsuario === respuestasCorrectas[numPregunta]);
            if (esCorrecta) {
                pregunta.classList.add('acierto');
                aciertos++;
            } else {
                pregunta.classList.add('error');
            }
            
            preguntasRespondidas++;
            
            const botones = pregunta.querySelectorAll('button');
            botones.forEach(boton => {
                boton.disabled = true;
            });

            if (preguntasRespondidas === 7) {
                mostrarResultado();
            }
        }
        
        function mostrarResultado() {
            const resultado = document.getElementById('resultado');
            resultado.style.display = 'block';
            resultado.textContent = `Resultado: ${aciertos} de 7 aciertos`;
            
            if (aciertos >= 5) {
                resultado.style.background = '#d4ffd4';
                resultado.style.color = 'green';
            } else {
                resultado.style.background = '#ffd4d4';
                resultado.style.color = 'red';
            }
        }