import './namingWhiteKeys.css'
import c from '../images/c.jpg'
const NamingWhiteKeys = () => {
    return ( 
        <div className="whiteKeys">
        <p className="intro-text">White keys are named using all the 7 letters of the music alphabet (A,B,C,D,E,F and G). The keys on the keyboard are named in alphabetical order. Thus if we know the position of one key, then we can figure out the position of all the others. That said, in order to learn how to name all  the keys, we will learn how to name just one. and then use that one to name all the others. The key we will learn and in turn use as our reference is called <span className='extra-link'>key C.</span></p>
        <div className='intro-img'>
            <img src='' alt=""/>
        </div>
        <div></div>
        <p className='intro-text row px-3'>
            Recall that the black keys on the keyboard are arranged in groups of twos and threes. Now looking at the group with two black keys, the white key emmediately before them is called key C.<br/>
            <img src={c} alt="" className='col-md-8'/><br/>
            
            Following the order. The next white key after C would be D.<br/>
            <img src={c} alt="" className='col-md-8'/><br/>
            And the next white key after D would be E<br/>
            <img src={c} alt="" className='col-md-8'/><br/>
            We can continue this till we reach the last letter (G).<br/>
            <img src={c} alt="" className='col-md-8'/><br/>
            Note that the keyboard has more white keys than the 7 letters of the music alphabet so when we reach the last letter which is G,we start the next key from A and the process keeps repeating till we run out of keys on our keyboard.<br/>
            <img src={c} alt="" className='col-md-8'/><br/>
            If you followed though all the lines above, then you should now know how to name white keys. There are only a few steps involved. First you locate the group of two black keys, then the white key before them is called key C. From there you can trace the name of any other key following the alphabetical order and restarting from A when you reach G.

        </p>
        
    </div>
     );
}
 
export default NamingWhiteKeys;