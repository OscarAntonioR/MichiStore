import imgB from './Welcome.png';
import './Inicio.css';

export function Inicio() {
	return (
		<div className="incio-container animate__animated animate__fadeIn">
			<img className="bienvenido" src={imgB} alt="Img" />
			<br />
		</div>
	);
}
