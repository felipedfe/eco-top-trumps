import { useState, useEffect, useContext, useMemo } from "react";
import myContext from "../../context/myContext";
import CardComparison from "../CardComparison/CardComparison";

function CpuMove() {
  const [confirmedAttr, setConfirmedAttr] = useState(false);
  const { setSelectedAttr } = useContext(myContext);

  const attributes: Record<number, string> = {
    0: "strength",
    1: "skill",
    2: "magic",
    3: "fear",
    4: "charisma",
  }

  const NUMBER_OF_ATTR = 3;

  const attrKey = useMemo(() => Math.floor(Math.random() * NUMBER_OF_ATTR), []);

  const selectRandomAttribute = () => {
    console.log("attrKey: ", attrKey)
    console.log("atributo: ", attributes[attrKey])
    return attributes[attrKey];
  }

  const intervalId = setInterval((prev: boolean) => setConfirmedAttr(!prev), 1000);

  useEffect(() => {
    const attribute = selectRandomAttribute();
    setSelectedAttr(attribute);
    
    return clearInterval(intervalId);
  }, []);

  return (
    <>
      <p>Cpu Move</p>
      {
        confirmedAttr ?
          <CardComparison setConfirmedAttr={setConfirmedAttr} /> :
          <p>Cpu Pensando...</p>
      }
    </>
  )
}

export default CpuMove;
