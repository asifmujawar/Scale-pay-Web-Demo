import react from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import work from './work4.png'
import '../Styles/About.css'
function About(){
    return(
        <div className="about">
            <div className="row">
                <div className="col-lg-6" style={{textAlign:'center'}}>
                    <img src={work}/>
                </div>
                <div className="col-lg-6">
                    <h1>Who We Are ?</h1>
                    <p>ScalePay is a B2B cross-border payments company that supercharges SMEs to trade globally. The founder is an ex-McKinsey, ex-VC analyst, who saw this problem firsthand while revamping the trade platform of India's leading bank.
The global B2B cross-border payments industry annually powers USD 120 Trillion in payment flows that move between businesses.</p>
<p> The whole industry is re-thinking its heavy paper-based processes, lack of visibility and resistance to newer currencies and methods. ScalePay is positioned at the intersection of all these inefficiencies, to allow SMEs to concentrate on their core business and forget all about the painful experience of cross-border payments.
    ScalePay intends to rewrite processes to enable and not throttle businesses.</p>
                </div>

            </div>
        </div>
    )
}

export default About