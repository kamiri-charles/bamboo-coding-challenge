import { useEffect, useState, useRef } from 'react';
import CharacterCard from './CharacterCard';
import './styles.scss'

const Home = () => {
	let homeRef = useRef();

	let [characters, setCharacters] = useState([]);
	let [page, setPage] = useState(1);



	
	useEffect(() => {
		let header = document.getElementById('header');
		homeRef.current.addEventListener('scroll', e => {

			if (homeRef.current.scrollTop > 90) {
				header.classList.add('scrolled')
			} else {
				header.classList.remove('scrolled')
			}
			
			return () => {
				homeRef.current.removeEventListener('scroll', e)
			}
		})

		fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
			.then(res => res.json())
			.then(data => {
				setCharacters(data.results)
				console.log(data.results)
			}
		);
	}, [page])
	
	
	return (
		<div className="home" ref={homeRef}>

			{characters.map(character => <CharacterCard character={character} />)}

		</div>
		);
	}
	
	export default Home;