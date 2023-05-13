import img from '../assets/IMAGE1.jpg'

export default function Poster(){


	return <section className="relative w-full">
	   <h1 className='text-[white] absolute z-10 bg-clip-text font-extrabold mt-20 text-[24px]  md:text-[40px] lg:text-[60px]  xl:text-[100px] ml-10 w-[50%]'
         style = {{textShadow:'3px 3px black'}}
	   >
          Get newly Aeoroplane parts here and the Recycle parts also....
	   </h1>
	  <img className='w-full blur-[3px]' src = {img}/>
	</section>
}