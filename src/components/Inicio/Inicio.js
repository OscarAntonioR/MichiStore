import imgB from './Welcomee.png';
import './Inicio.css';

export function Inicio() {
	return (
		<div className="incio-container">
			<img className="bienvenido" src={imgB} alt="Img" />
		</div>
	);
}