import './Display.css';

export default function Display({ head }) {
  return (
    <div className="right">
      <div className="character">
        <div
          className="bg head"
          id="head"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/${head}-head.png)` }}
        ></div>
        <div className="bg middle" id="middle"></div>
        <div className="bg bottom" id="bottom"></div>
      </div>
    </div>
  );
}
