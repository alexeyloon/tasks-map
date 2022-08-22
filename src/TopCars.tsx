import React from 'react';

type topCarsType = {
    cars: Array<CarsType>
}
type CarsType = {
    manufacturer: string,
    model: string
}
const topCars = (props: topCarsType) => {
    return (
        <table>
            <tr>
                {props.cars.map((objectFromCarsArray: CarsType, index: number) => {
                    return (
                        <th key={index}>{objectFromCarsArray.manufacturer}</th>
                    )
                })}
            </tr>
            <tr>
                {props.cars.map((objectFromCarsArray: CarsType, index: number) => {
                    return (
                        <td key={index}>{objectFromCarsArray.model}</td>
                    )
                })}
            </tr>
        </table>
    );
};

export default topCars;