import "./newmodal.css";
const Addressbar = ({ stores }) => {
    return(
        
        <div className="store-details">
        <div>
            <select className="form-select-style" aria-label="Default select example">
                <option >select store location</option>
                <option value="1">JP Nagar</option>
                <option value="2">Dilsuknagar</option>
                <option value="3">Malakpet</option>
            </select>
        </div>
        <div className="store-details-element">
            <span className="style-bold">Phone:</span>
            <span>+91 99999999</span>
        </div>
        <div className="store-details-element">
            <span className="style-bold">Store Address:</span>
            <span>Near phone booth 10th road</span>
        </div>
    </div>
   
    )
};

export default Addressbar;