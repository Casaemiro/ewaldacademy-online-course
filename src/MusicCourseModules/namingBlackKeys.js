import './namingBlackKeys.css'
import c from '../images/c.jpg'
const NamingBlackKeys = () => {
    return (
        <div className="blackKeys">
            <p className="intro-text">Unlike white keys, black keys do not get their names directly from the musical alphabet. Instead, they are named with respect to the white keys on their left and right.
                To further demonstrate this, we will use the concepts of <span className='extra-link'>sharps and flats</span>.
            </p>
            <div className='intro-img'>
                <img src='' alt="" />
            </div>
            <div className='px-4 mx-3' style={{ border: "1px solid rgba(90, 20, 0, 0.327)", borderRadius: "5px", paddingTop: "1%", paddingBottom: "1%", backgroundColor: "rgba(90, 100, 0, 0.127)", paddingRight: "1%" }}>
                <span className='extra-link'>Sharp rule: It states that any black key to the right of a white key is the sharp of that white key and is named by adding the word <b>sharp</b> to the name of the white key</span>
            </div>
            <p className='px-4 pt-2 row'>For example... the black key directly after C will be called C-sharp and the black key directly after F will be called F-sharp. Same rule applies for all the other black keys
                <img src={c} alt="" className='col-12 col-md-8' />
            </p>

            <div className='px-4 mx-3' style={{ border: "1px solid rgba(90, 20, 0, 0.327)", borderRadius: "5px", paddingTop: "1%", paddingBottom: "1%", backgroundColor: "rgba(90, 100, 0, 0.127)", paddingRight: "1%" }}>
                <span className='extra-link'>Flat rule: It states that any black key to the left of a white key is the flat of that white key and is named by adding the word <b>flat</b> to the name of the white key</span>
            </div>
            <p className='px-4 pt-2 row'>For example... the black key emmediately before B will be called B-flat and the black key emmediately before E will be called E-flat. Same rule applies for all the other black keys
                <img src={c} alt="" className='col-12 col-md-8' />
            </p>



        </div>
    );
}

export default NamingBlackKeys;