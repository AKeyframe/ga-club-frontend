import { Link } from "react-router-dom";


export default function Footer() {

	
	return (
		<footer class="footer-distributed">

			<div class="footer-left">
				<h3>About <span>GA Club</span></h3>
				<p class="footer-company-about">
					
					We offer high end sneakers at a competitive price the competition can't beat.</p>
				

				<p class="footer-company-name">© 2021 GA CLUB and SNEAKERS Ltd.</p>
			</div>

			<div class="footer-center">
				<div>
					<i class="fa fa-map-marker"></i>
					<p>
						<span>
							10 E 21st St #2, New York, NY 10010
						</span>
					</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>(917) 722 0237</p>
				</div>
				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@gaclub.com">support@gaclub.com</a></p>
				</div>
			</div>
			<div class="footer-right">
				
				<div >
				<div className="teamLinks">
						
						
						<div className='team'>
							<h2>Nir E. </h2>
							<a href="https://github.com/bkboy21">Github</a>
							<a href="#">Linkedin</a>
						</div>

						<div className='team'>
							<h2>Josh B. </h2>
							<a href="https://github.com/joshbolanos7">Github</a>
							<a href="https://www.linkedin.com/in/joshua-bolanos7/">Linkedin</a>
						</div>

						<div className='team'>
							<h2>Alec K. </h2>
							<a href="https://github.com/AKeyframe">Github</a>
							<a href="https://www.linkedin.com/in/alec-kagebein/">Linkedin</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}