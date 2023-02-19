import React, { Component } from 'react';
import { YMaps, Map, Button,Placemark,Circle } from 'react-yandex-maps'


class Test extends Component {
  state = {
    width: 1250,
    height: 600,
    small: true
  }
  render() {
    const { width, height } = this.state
    return (
      <YMaps>
        <Map
          width={width}
          height={height}
          state={{
            center: [55.75, 37.57],
            zoom: 4,
            controls: ['fullscreenControl']
          }}modules={['control.ZoomControl', 'control.FullscreenControl','geoObject.addon.balloon', 'geoObject.addon.hint']}
        >
        <Circle modules={['geoObject.addon.balloon']} geometry={[[55.75, 37.57],100000]} options={{
        fillColor: '#ffff0022',
        strokeColor: '#3caa3c88',
        strokeWidth: 7}} properties={{
        iconContent: '2', 
        hintContent: this.props.mr+"°C",
        balloonContent: 'Москва',
        }}
        /> 
         <Circle modules={['geoObject.addon.balloon']} geometry={[[59.939402, 30.314264],100000]} options={{
        fillColor: '#ffff0022',
        strokeColor: '#3caa3c88',
        strokeWidth: 7}} 
        properties={{
        iconContent: '2', 
        hintContent: this.props.mr2+"°C",
        balloonContent: 'Питер',}}/>
        <Circle modules={['geoObject.addon.balloon']} geometry={[[47.221373, 39.718848],100000]} options={{
        fillColor: '#ffff0022',
        strokeColor: '#3caa3c88',
        strokeWidth: 7}} 
        properties={{
        iconContent: '2', 
        hintContent: this.props.mr3+"°C",
        balloonContent: 'Ростов', }}/>

        <Circle modules={['geoObject.addon.balloon']} geometry={[[56.327055, 44.006394],100000]} options={{
        fillColor: '#ffff0022',
        strokeColor: '#3caa3c88',
        strokeWidth: 7}} properties={{
        iconContent: '2', 
        hintContent: this.props.mr4+"°C",
        balloonContent: 'НН',}}/>
          <Button
            data={{
              title: 'обновляет данные погоды',
              content: 'Обновить'
            }}
            options={{
              selectOnClick: false
            }}
            onClick={() => this.props.pog()}
          />
        </Map>
      </YMaps>
    );
  }
}
export default Test;