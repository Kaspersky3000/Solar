import {Map, SearchControl, YMaps} from "react-yandex-maps";
import './Styles.css';
import {useState} from "react";
function App() {
    const [area,setArea]=useState(100);
    const [use,setUse]=useState(100);
    const [eco,setEco]=useState(50);
    const [finalPower, setFinalPower]  =useState(0);
    const [count0, setCount0] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    const [count5, setCount5] = useState(0);
    const [count6, setCount6] = useState(0);
    const [count7, setCount7] = useState(0);
    const [count8, setCount8] = useState(0);
    const [count9, setCount9] = useState(0);

    let CS=[10];
    for (let i=0;i<10;i++)
        CS[i]=0;
    function ClearCS(){
        for (let i=0;i<10;i++){
            CS[i]=0;}};
    let SQUAREsolar= [10];
    SQUAREsolar[0]=0.12;
    SQUAREsolar[1]=0.18;
    SQUAREsolar[2]=0.23;
    SQUAREsolar[3]=0.35;
    SQUAREsolar[4]=0.44;
    SQUAREsolar[5]=0.64;
    SQUAREsolar[6]=0.97;
    SQUAREsolar[7]=0.99;
    SQUAREsolar[8]=1.26;
    SQUAREsolar[9]=1.63;
    let POWERsolar=[10]
    POWERsolar[0]=29.970;
    POWERsolar[1]=39.960;
    POWERsolar[2]=59.940;
    POWERsolar[3]=89.910;
    POWERsolar[4]=119.880;
    POWERsolar[5]=189.810;
    POWERsolar[6]=299.700;
    POWERsolar[7]=299.700;
    POWERsolar[8]=399.600;
    POWERsolar[9]=499.500;




    function ALLPOWER(){
        let x = use*eco/100;
        console.log(x);
        return x;
    }
    function PHONK(farea,FFinalPower) {
        for (let j=0;j<2;j++){
            if (j==0) {
                ClearCS();
                let i = 9;
                console.log("WHILE OPEN");
                while ((farea >= SQUAREsolar[0]) && (FFinalPower >= POWERsolar[0]) && (i >= 0)) {

                    if ((farea >= SQUAREsolar[i]) && (FFinalPower >= POWERsolar[i])) {
                        farea = farea - SQUAREsolar[i];
                        FFinalPower = FFinalPower - POWERsolar[i];
                        CS[i] = CS[i] + 1;

                    } else {

                        i--;
                    }


                }
                if (farea >= SQUAREsolar[i]) {
                    if (FFinalPower <= POWERsolar[0]) {
                        CS[0]++;
                        farea = farea - SQUAREsolar[i];
                        FFinalPower = FFinalPower - POWERsolar[i];
                    }
                }

                console.log("WHILE CLOSE");
                for (let i = 0; i < 10; i++) {
                    console.log(i, CS[i]);
                }
            }
            else{if (j==1){
                console.log("GETCOUNT")
    //function getCount(CSS){
        setCount0(CS[0]);
        setCount1(CS[1]);
        setCount2(CS[2]);
        setCount3(CS[3]);
        setCount4(CS[4]);
        setCount5(CS[5]);
        setCount6(CS[6]);
        setCount7(CS[7]);
        setCount8(CS[8]);
        setCount9(CS[9]);
    }}}}
  return (
    <div className="App">

        <div>
        <div >
            <h1  align="center">Калькулятор для подсчета количества солнечных батарей</h1><div></div></div>
        </div>
          <div className="font">
               1. Укажите дом, на котором желаете установить солнечные панели
          </div>

          <div>
              <YMaps>
              <Map defaultState={{ center: [47.237724, 39.712363], zoom: 17 , type: 'yandex#hybrid'}} width = "" height="400px">
                  <SearchControl/>
              </Map>


              </YMaps>
        </div>

          <div className="font">
              2. Укажите площадь крыши вашего дома
              <div>
                <input
                type="number"
                value={area}

                onChange={event => setArea(event.target.value)}

                />
                  {/*{<button onClick={event => {
                      console.log(area)}}>
                            Вывод
                  </button>}*/}
              </div>
          </div>
          <div className="font">
              3. Укажите сумарные затраты электроэнергии вашего дома в год(кВт)
              <div>
                  <input
                      type="number"
                      value={use}
                      onChange={event => setUse(event.target.value)}
                  />
                  {/*{<button onClick={event => {
                      console.log(use)}}>
                      Вывод
                  </button>}*/}
              </div>
          </div>
          <div className="font">
              4. Укажите желаемую экономию электроэнергии(в %)
              <div>
                  <input
                      type="number"
                      value={eco}
                      onChange={event => setEco(event.target.value)}
                  />
                  {/*{<button onClick={event => {
                      console.log(eco)}}>
                      Вывод
                  </button>}*/}
              </div>
          </div>




          <button onClick={event =>{setFinalPower(ALLPOWER)} } >Расчитать мощность</button>
          <div className="font">
              Необходимая мощность:{finalPower}
          </div>
          <button onClick={event =>{PHONK(area,finalPower)} }>Результат</button>
          {/*<button onClick={event =>{getCount(CS)} }>Потом эту</button>*/}


            <table border="1" className="font" >
                <div align="center">
            <tr>
                <td>Название</td>
                <td>Размер,мм</td>
                <td>Мощность панели,Вт</td>

                <td>Количество</td>
                <td>Цена, руб</td>
            </tr>
            <tr>
                <td>МСК-15</td><td>285*425*28</td>
                <td>15</td>
                <td>{count0}</td>
                <td>2200</td>
            </tr>
            <tr>
                <td>МСК-20</td><td>425*425*28</td>
                <td>20</td>
                <td >{count1}</td>
                <td>2400</td>
            </tr>
            <tr>
                <td>МСК-30</td><td>425*555*28</td>
                <td>30</td>
                <td>{count2}</td>
                <td>2500</td>
            </tr>
            <tr>
                <td>МСК-50</td><td>545*668*28</td>
                <td>45</td>
                <td>{count3}</td>
                <td>3500</td>
            </tr>
            <tr>
                <td>МСК-60</td><td>550*810*28</td>
                <td>60</td>
                <td>{count4}</td>
                <td>4000</td>
            </tr>
            <tr>
                <td>
                    МСК-100</td><td>540*1200*35</td>
                <td>95</td>
                <td>{count5}</td>
                <td>5300</td>
            </tr>
            <tr>
                <td>ФСМ-150</td><td>667*1467*35</td>
                <td>150</td>
                <td>{count6}</td>
                <td>7000</td>
            </tr>
            <tr>
                <td>МСК-150</td><td>674*1482*35</td>
                <td>150</td>
                <td>{count7}</td>
                <td>7500</td>
            </tr>
            <tr>
                <td>
                    МСК-200</td><td>805*1575*40</td>
                <td>200</td>
                <td>{count8}</td>
                <td>10000</td>
            </tr>
            <tr>
                <td>МСК-250</td><td>991*1650*40</td>
                <td>250</td>
                <td>{count9}</td>
                <td>12000</td>
            </tr></div>
        </table>




    </div>
  );
}

export default App;
