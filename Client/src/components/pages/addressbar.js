import "./modal1.css";
const Addressbar = ({ stores }) => {
    return(
        
    <div className="modal-addres-bar">
        
           
        <div className="modal-address-input">
        {stores.map((store)=>{
            const{phone,location,Address} = store;   
        <select name="stores" id="store">
    <option value={location}>{location}</option>   
        </select>
    })    }
        



        <input type="text" placeholder="Store Location"></input>
        </div>
        <div className="modal-address-store">
        <label>Store Address :</label>
        </div>
        
        <div className="modal-address-phone">
        <label>Phone :</label>
         
        </div> 


    </div>
   
    )
};

export default Addressbar;