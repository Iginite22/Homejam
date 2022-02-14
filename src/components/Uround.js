import React from 'react'
import Round from './Round'
export default function Uround() {
  return (
    <div >
        <div className="container" style={{marginTop:"150px",marginBottom:"200px"}}>
            <div className="row">
                <div className="col-sm-4"style={{width:"200px",height:"200px",border:"2px solid white",borderRadius:"100px",display:"flex",flexDirection:"column",justifyContent:"center",margin:"auto",alignItems:"center",boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.30)"}}>
                    <Round></Round>
                </div>
                <div className="col-sm-4"style={{width:"200px",height:"200px",border:"2px solid white",borderRadius:"100px",display:"flex",flexDirection:"column",justifyContent:"center",margin:"auto",alignItems:"center",boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.30)"}}>
                    <Round></Round>
                </div>
                <div className="col-sm-4"style={{width:"200px",height:"200px",border:"2px solid white",borderRadius:"100px",display:"flex",flexDirection:"column",justifyContent:"center",margin:"auto",alignItems:"center",boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.30)"}}>
                    <Round></Round>
                </div>
            </div>
        </div>
    </div>
  )
}
