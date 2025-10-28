function mostrarAlerta(idioma) {
            let texto = '';
            
            switch(idioma) {
                case 'es':
                    texto = '¡Bienvenido/a a nuestra página!';
                    break;
                case 'en':
                    texto = 'Welcome to our website!';
                    break;
                case 'ru':
                    texto = 'Добро пожаловать на наш сайт!';
                    break;
                default:
                    texto = 'Idioma no reconocido';
            }
            
            alert(texto);
        }