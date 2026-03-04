"use client"

type ButtonProp = {
    label:string;
    onClick : ()=> void;
}

export default function Button ({label,onClick}:ButtonProp){
return(
    <button
        onClick={onClick}
      style={{
        padding: "10px 20px",
        background: "black",
        color: "white",
        border: "none",
        cursor: "pointer",
      }}
    >
        
      {label}
    </button>
)
}