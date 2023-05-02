export const seleccionarPreguntas=(tipo)=>{
    let preguntas=[]
    let yaGenerados=[]
    for (let s=0;s<7;s++){
        let numAleatorio=Math.floor(Math.random()*36);
        if(!yaGenerados.some(num=>num===numAleatorio) && (tipo!='todos' ? preguntasData[numAleatorio].tipo===tipo : true) ){
            preguntas.push(preguntasData[numAleatorio])
        }else{
            s--;
        }
        yaGenerados.push(numAleatorio);
    }

    return preguntas;
}


const preguntasData = [
    {
        id: 1,
        pregunta:"En los procesos cicatriciales, los fibroblastos se encargan de:",
        respuesta:"Elaborar activamente componentes de la matriz extracelular.",
        opciones:["Fagocitar bacterias y restos celulares.", "Liberar histamina y factores quimiotácticos.", "Secretar grandes cantidades de inmunoglobinas.", "Elaborar activamente componentes de la matriz extracelular."],
        tipo:"Multiple"
    },
    {
        id: 2,
        pregunta:"Corresponde a la célula más abundante del tejido conectivo, sintetiza casi toda la MEC, se reproduce con facilidad y su mayor actividad biológica la realiza en su estado inmaduro:",
        respuesta:"Fibroblasto.",
        opciones:["Células mesenquimales.", "Fibrocito.", "Fibroblastos modificados.", "Fibroblasto."],
        tipo:"Multiple"
    },
    {
        id: 3,
        pregunta:"El tejido conectivo laxo se ubica en zonas que no requieren una gran resistencia a las tensiones mecánicas, se distribuye ampliamente en tejido subcutáneo (dermis papilar), lamina propia de los epitelios y constituye el estroma de órganos parenquimatosos. Lo anterior se debe a que en su composición histológica presenta:",
        respuesta:"Gran cantidad de células inmersas en una MEC sin presentar una organización estructurada. Escasas fibras que se ubican dispersas en todas las direcciones.",
        opciones:["Mayor predominio de fibras sobre la cantidad de células y matriz amorfa, donde las fibras se disponen de forma organizada.", "Gran cantidad de células inmersas en una MEC sin presentar una organización estructurada. Escasas fibras que se ubican dispersas en todas las direcciones.", "Abundante red vascular y nerviosa, desempeñando un papel importante en la nutrición de los tejidos y órganos.", "Variedad de células y fribas dándole una consistencia blanda que cede a las presiones."],
        tipo:"Multiple"
    },
    {
        id: 4,
        pregunta:"El tejido cartilaginoso está formado por células (condrocitos) y abundante MEc que puede ser gelatinosa y elástica. El cartílago hialino se ubica en superficies articulares, fosas nasales y tráquea, mientras que el cartílago elástico se ubica en lugares que precisas cierta elasticidad y a su vez rigidez como el pabellón de la oreja. La diferencia histológica entre estos dos tipos de cartílago radica en que:",
        respuesta:"El cartílago hialino presenta mayor cantidad de MEC cartilaginosa y el elástico presenta una matriz heterogénea que permite identificar material fibrilar (fibras elásticas).",
        opciones:["El cartílago hialino carece de pericondrio evitando la regeneración de este y el elástico carece de vascularización e inervación.", "Los condrocitos del cartílago hialino forma grupos isógenos mientras que en el elástico la organización de los condrocitos es en fila india.", "La matriz del cartílago hialino está formada por colágeno tipo II y el elástico únicamente por fibras elásticas.", "El cartílago hialino presenta mayor cantidad de MEC cartilaginosa y el elástico presenta una matriz heterogénea que permite identificar material fibrilar (fibras elásticas)."],
        tipo:"Multiple"
    },
    {
        id: 5,
        pregunta:"La célula del tejido conectivo especializado (sangre) que al salir de la circulación se transforma en otro tipo de célula desarrollando gran capacidad de fagocitosis denominada ___________",
        respuesta:"Monocito.",
        opciones:["Neutrófilo.", "Eosinófilo.", "Linfocito.", "Monocito."],
        tipo:"Completar"
    },
    {
        id: 6,
        pregunta:"El epitelio estratificado tiene en la capa superficial, células que han perdido su núcleo y están llenas de una proteína resistenet al agua formando una barrera protectora frente a las fuerzas destructuras del medio ambiente. Se encuentra revistiendo tejidos como la piel y el pezón. El enunciado hace referencia:",
        respuesta:"Epitelio estratificado plano queratinizado.",
        opciones:["Epitelio estratificado cúbico.", "Epitelio estratificado cilíndrico.", "Epitelio estratificado plano.", "Epitelio estratificado plano queratinizado."],
        tipo:"Multiple"
    },
    {
        id: 7,
        pregunta:"_________ es una célula fija del tejido conectivo:",
        respuesta:"Mastocito.",
        opciones:["Células de rouget.", "Macrófago.", "Leucocito.", "Mastocito."],
        tipo:"Completar"
    },
    {
        id: 8,
        pregunta:"___________________ es un epitelio que realiza funciones de absorción de líquidos, intercambio gaseoso, transporte activo y que, además, reviste cavidades corporales cerradas como pleural, pericárdica y peritoneal. Es decir, se hace referencia a:",
        respuesta:"Epitelio simple plano.",
        opciones:["Epitelio simple plano queratinizado.", "Epitelio simple plano no queratinizado.", "Epitelio simple plano.", "Epitelio simple plano con."],
        tipo:"Completar"
    },
    {
        id: 9,
        pregunta:"Un paciente canino de 4 años presenta fractura de fémur. Durante el proceso de cicatrización y creación de nuevo tejido óseo, ¿Qué célula se encarga de este proceso?:",
        respuesta:"Células osteocondrógenas.",
        opciones:["Osteoclasto.", "Osteoblasto.", "Osteocito.", "Células osteocondrógenas."],
        tipo:"Multiple"
    },
    {
        id: 10,
        pregunta:"En este tipo de tejido, las fibras de colágeno están organizadas en una sola dirección, con presencia de fibroblastos entre las fibras, que tomas apariencia aplastada y en hilera. Además, es un tejido sometido a grandes fuerzas de tracción y estiramientos unidireccionales. El enunciado habla de:",
        respuesta:"Tejido conectivo denso regular.",
        opciones:["Tejido conectivo laxo.", "Tejido conectivo adulto.", "Tejido conectivo denso irregular.", "Tejido conectivo denso regular."],
        tipo:"Multiple"
    },
    {
        id: 11,
        pregunta:"Las células epiteliales presentan polaridad, los cuales poseen a su vez especializaciones que le confieren propiedades particulares al tejido. En la región apical podemos encontrar este tipo de especialización:",
        respuesta:"Microvellosidades, esterocilios y cilios.",
        opciones:["Microvellosidades, esterocilios y cilios.", "Microvellosidades, uniones ocludens y esterocilios.", "Esterocilios y microvellosidades.", "Solamente microvellosidades."],
        tipo:"Multiple"
    },
    {
        id: 12,
        pregunta:"Las siguientes son características de una glándula endocrina, excepto:",
        respuesta:"Sus conductos modifican el producto secretado.",
        opciones: ["Secreta sus productos hacia los vasos sanguíneos.", "Sus conductos modifican el producto secretado.", "La hipófisis es un ejemplo de ellas.", "Se organizan en cordones, cavitarias o foliculares."],
        tipo:"Multiple"
    },
    {
        id: 13,
        pregunta:"¿Qué tipo de unión Intercelular actúa como barrera de difusión intercelular, y debe ser destruída por los microorganismos para afectar el tejido?:",
        respuesta:"Unión ocluyente.",
        opciones: ["Unión ocluyente.", "Unión adherente.", "Unión comunicante.", "Mácula adherente."],
        tipo:"Multiple"
    },
    {
        id: 14,
        pregunta:"Son características histológicas del músculo liso:",
        respuesta:"Todas las anteriores.",
        opciones: ["El citoplasma no presenta estricaciones y las células tienen forma ahusada o fusiforme.", "Se localiza en las paredes de la mayoría de los órganos del tubo digestivo y son responsables del movimiento peristático.", "Están inervados por sistema nervioso autónomo, por lo tanto, son de contracción involuntaria.", "Todas las anteriores."],
        tipo:"Multiple"
    },
    {
        id: 15,
        pregunta:"______________ de la neuroglia actúa como célula fagocítica y de defensa en el sistema nervioso:",
        respuesta:"Microglia.",
        opciones: ["Célula ependimaria.", "Oligodendrocito.", "Microglia.", "Neurona."],
        tipo:"Completar"
    },
    {
        id: 16,
        pregunta:"Las terminaciones nerviosas aferentes pueden ser:",
        respuesta:"Exteroceptores, visceroceptores y propioceptores.",
        opciones: ["Exteroceptores, visceroceptores y propioceptores.", "Discos de merkel, motoras y secretoras.", "Exteroceptores, mototoras y secretoras.", "Motoras y secretoras."],
        tipo:"Multiple"
    },
    {
        id: 17,
        pregunta:"Los alveolos son unas estructuras semiesféricas situadas al final de los bronquiolos donde se lleva a cabo el intercambio gaseoso. Estructuralmente indique qué células componen el epitelio alveolar:",
        respuesta:"Neumocito tipo I y tipo II.",
        opciones: ["Epitelio simple plano.", "Neumocito tipo I y tipo II.", "Macrófagos alveolares.", "Líquido surfactante."],
        tipo:"Multiple"
    },
    {
        id: 18,
        pregunta:"________________________________________ NO ES parte de la barrera hermatoalveolar:",
        respuesta:"Citoplasma de la célula endotelial.",
        opciones: ["Citoplasma del neumocito tipo II.", "Citoplasma del neumocito tipo I.", "Lámina propia de los capilares.", "Citoplasma de la célula endotelial."],
        tipo:"Completar"
    },
    {
        id: 19,
        pregunta:"_____________ es la unidad estructural y funcional de la fibra muscular:",
        respuesta:"Sarcómero.",
        opciones: ["Sarcolema.", "Miofibrilla.", "Sarcómero.", "Bandas A y Bandas I."],
        tipo:"Completar"
    },
    {
        id: 20,
        pregunta:"De las siguientes afirmaciones, marque la correcta:",
        respuesta:"Las células ependimarias recubren los ventrículos del cerebro dispuestas en forma de epitelio cilíndrico simple.",
        opciones: ["Algunas neuronas no tienen mitocondrias.", "Las células ependimarias recubren los ventrículos del cerebro dispuestas en forma de epitelio cilíndrico simple.", "El sistema nervioso central está formado solo de sustancia gris.", "La corteza cerebral consta de 3 capas bien diferenciadas."],
        tipo:"Multiple"
    },
    {
        id: 21,
        pregunta:"De las células neuroglia, los oligodendrocitos realizan entre sus funciones:",
        respuesta:"Proporcionan a las prolongaciones axónicas del SNC las vainas de mielina.",
        opciones: ["Proporcionan a las prolongaciones axónicas del SNC las vainas de mielina.", "Proporcionan a las prolongaciones axónicas del SNP las vainas de mielina.", "Proporcionan a los cuerpos neuronales del SNP las vainas de mielina.", "Proporcionan a los cuerpos neuronales del SNC las vainas de mielina."],
        tipo:"Multiple"
    },
    {
        id: 22,
        pregunta:"En los alveolos, durante la interfase aire-epitelio alveolar, se evita el colapso de sus paredes gracias a la presencia de una sustancia secretada. El enunciado hace referencia a:",
        respuesta:"Líquido surfactante producido por los neumocitos tipo II.",
        opciones: ["Macrófagos alveolares.", "Células claras.", "Líquido surfactante producido por los neumocitos tipo II.", "Barrera hematoalveolar."],
        tipo:"Multiple"
    },
    {
        id: 23,
        pregunta:"Los pericitos son células fijas del tejido conectivo, los cuales presentan prolongaciones y tienen actividad contractil. Se localizan alrededor de los vasos sanguíneos, regulando el flujo sanguíneo. Estos se encuentran ubicados específicamente en _____________",
        respuesta:"Capilares.",
        opciones: ["Arteriolas.", "Venas medianas.", "Capilares.", "Arterias musculares."],
        tipo:"Completar"
    },
    {
        id: 24,
        pregunta:"Los neumocitos tipo ____ son células ________, que se caracterizan por ____________________. Seleccione una:",
        respuesta:"I - planas - presentar actividad fagocitica.",
        opciones: ["II - cuboidales - presentar microvellosidades.", "II - cuboidales - ser las células más grandes del epitelio alveolar.", "I - planas - formar neumocitos tipo II.", "I - planas - presentar actividad fagocitica."],
        tipo:"Completar"
    },
    {
        id: 25,
        pregunta:"Las válvulas presentes en las venas están dispuestas en pares y sus bordes libres van dirigidos en el sentido de la circulación sanguínea evitando el flujo retrogrado de la sange. Estas estructuras son:",
        respuesta:"Pliegues de la íntima.",
        opciones: ["Pliegues de la adventicia.", "Engrosamiento del músculo de la túnica media.", "Proyecciones formadas únicamente de endotelio.", "Pliegues de la íntima."],
        tipo:"Multiple"
    },
    {
        id: 26,
        pregunta:"Los capilares corresponden a los extremos terminales de las arteriolas y se ramifican para formar una red capilar que acaba desembocando en las vénulas. Histológicamente están constituídos en su pared por ___________________",
        respuesta:"Endotelio y lámina basal.",
        opciones: ["Endotelio y lámina basal.", "Túnica íntima y media poco desarrollada.", "Endotelio discontinuo.", "Túnica íntima, media y túnica adventicia."],
        tipo:"Completar"
    },
    {
        id: 27,
        pregunta:"Entre el tejido epitelial y el tejido conectivo existe una capa de matriz extracelular especializada denominada lámina basal.",
        respuesta:"Verdadero",
        opciones: ["Verdadero", "Falso"],
        tipo:"Verdadero o falso"
    },
    {
        id: 28,
        pregunta:"Los 4 tejidos básicos son tejido conectivo, tejido muscular, tejido epitelial y tejido nervioso.",
        respuesta:"Verdadero",
        opciones: ["Verdadero", "Falso"],
        tipo:"Verdadero o falso"
    },
    {
        id: 29,
        pregunta:"Los capilares se clasifican en 3: continuos, sinusoides y fenestrados.",
        respuesta:"Verdadero",
        opciones: ["Verdadero", "Falso"],
        tipo:"Verdadero o falso"
    },
    {
        id: 30,
        pregunta:"¿Los capilares están compuestos por epitelio simple cubico?",
        respuesta:"Falso",
        opciones: ["Verdadero", "Falso"],
        tipo:"Verdadero o falso"
    },
    {
        id: 31,
        pregunta:"¿El endotelio es epitelio simple cilíndrico?",
        respuesta:"Falso",
        opciones: ["Verdadero", "Falso"],
        tipo:"Verdadero o falso"
    },
    {
        id: 32,
        pregunta:"La matriz extracelular son una red de fibras proteicas sintetizadas y secretadas por las propias células del TC que se dispone en el espacio intercelular.",
        respuesta:"Verdadero",
        opciones: ["Verdadero", "Falso"],
        tipo:"Verdadero o falso"
    },
    {
        id: 33,
        pregunta:"El tejido conjuntivo puede tener células móviles y fijas.",
        respuesta:"Verdadero",
        opciones: ["Verdadero", "Falso"],
        tipo:"Verdadero o falso"
    },
    {
        id: 34,
        pregunta:"Los adipocitos son células encargadas en la síntesis o almacenamiento de plasmocitos y grasa.",
        respuesta:"Falso",
        opciones: ["Verdadero", "Falso"],
        tipo:"Verdadero o falso"
    },
    {
        id: 35,
        pregunta:"La sustancia gris de la médula espinal es donde se concentran los cuerpos celulares de las neuronas.",
        respuesta:"Verdadero",
        opciones: ["Verdadero", "Falso"],
        tipo:"Verdadero o falso"
    },
    {
        id: 36,
        pregunta:"La sustancia blanca es donde se encuentran las fibras nerviosas y están recubiertas de mielina.",
        respuesta:"Verdadero",
        opciones: ["Verdadero", "Falso"],
        tipo:"Verdadero o falso"
    },
]

