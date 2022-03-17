import {useState} from 'react';
import Details from './Details';
import './styles.css';

function Form() {
	const [sign,setSign] = useState('');
	const [name,setName] = useState('');
	const [day,setDay] = useState('');
	const [email,setEmail] = useState('');
	const [data,setData] = useState([]);
	const [show,setShow] = useState(false);

	const handleSubmit = async(e) => {
		e.preventDefault();
		console.log(sign,name,day,email)
		const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`;
        await fetch(URL, {
            method: 'POST'
        }).then(response => response.json())
        .then(json =>setData(json))
		.catch(error => console.log(error))
		setShow(true);
	}
	return (
		<div className="form">
			<form>
				<select required value={sign} onChange={e=>setSign(e.target.value)}>
					<option value="aries">Aries</option>
					<option value="taurus">Taurus</option>
					<option value="gemini">Gemini</option>
					<option value="cancer">Cancer</option>
					<option value="leo">Leo</option>
					<option value="virgo">Virgo</option>
					<option value="libra">Libra</option>
					<option value="scorpio">Scorpio</option>
					<option value="sagittarius">Sagittarius</option>
					<option value="aquarius">Aquarius</option>
					<option value="capricorn">Capricorn</option>
					<option value="pisces">Pisces</option>
				</select>
				<input required type="text" placeholder="Enter your Name" value={name} onChange={e => setName(e.target.value)}/>
				<select value={day} onChange={e=>setDay(e.target.value)}>
					<option value="today">Today</option>
					<option value="yesterday">Yesterday</option>
					<option value="tomorrow">Tomorrow</option>
				</select>
				<input required type="email" placeholder="Enter your Email" value={email} onChange={e => setEmail(e.target.value)}/>
				<input type="submit" id="submit" onClick={handleSubmit}value="Submit" />
			</form>
			{	
				show && <Details name={name} sign={sign} data={data}/>
			}
		</div>
	)
}

export default Form;