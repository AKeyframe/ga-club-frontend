// import { useRef, UseState } from "react"
import '../pages/css/sneakers.scss'


export default function Filter() {
    return (
        <>
            <div className='filterComp background'>
                <div className='FilterBrand'>
                    <div className='filLabel'>
                        <h4>Shop by: Brand</h4>
                    </div>
                    <div className='choices'>
                        <button>Adidas</button> <br />
                        <button>Nike</button> <br />
                        <button>Air Jordan</button> <br />
                        <button>Puma</button> <br />
                        <button>Reebok</button> <br />
                    </div>
                </div >
                <div className='FilterPrice'>
                    <h4>Shop by: Price</h4>
                $0<input 
                type="range"
                min='$0'
                max='$1000'
                />$1000

                </div>
                <div className='FilterGender'>
                    <div className='filLabel'>
                        <h4>Shop by: Gender</h4>
                    </div>
                    <div className='choices'>
                        <button>Male</button> <br />
                        <button>Female</button> <br />
                    </div>
                </div>

                <div className='FilterColor'>
                    <div className='filLabel'>
                        <h4>Shop by: Color</h4>
                    </div>
                    <div className='choices'>
                        <button>Red</button> <br />
                        <button>Blue</button> <br />
                        <button>White</button> <br />
                        <button>Black</button> <br /> 
                        <button>Grey</button> <br />  
                        <button>Yellow</button> <br />
                        <button>Pink</button> <br />
                        <button>Multi-Color</button> <br />
                    </div>

                </div>
            </div>
        
        </>
    )
    // const [sneaks, setSneaks] = useRef([]);
    // const [map, ]

    // const filterSneakers = (e, filterType, filterCondition) => 
    // let filter = useRef([...StateVar]);
}
