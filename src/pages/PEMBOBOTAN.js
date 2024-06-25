import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PEMBOBOTAN.css";

const PEMBOBOTAN = () => {
  const navigate = useNavigate();
  const [weights, setWeights] = useState({
    tingkatKesulitan: 0,
    durasiPendakian: 0,
    pemandanganAlam: 0,
    aksesibilitas: 0,
    biaya: 0,
    keamanan: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWeights((prevWeights) => ({
      ...prevWeights,
      [name]: parseFloat(value),
    }));
  };

  const saveWeights = () => {
    localStorage.setItem('criteriaWeights', JSON.stringify(weights));
    alert("Weights saved successfully!");
  };

  const onDSSContainerClick = useCallback(() => {
    navigate("/dss-moora");
  }, [navigate]);

  const onPERINGKATContainerClick = useCallback(() => {
    navigate("/rank");
  }, [navigate]);

  return (
    <div className="pembobotan">
      <div className="dasar" />
      <div className="navbar-menu">
        <div className="navbar-menu-child" />
        <div className="made-with-container">
          <span>{`Made with `}</span>
          <span className="span">❤</span>
          <span>️ by Kelompok 1</span>
        </div>
        <div className="pembobotan1">
          <div className="pembobotan-child" />
          <div className="pembobotan2">Pembobotan</div>
          <img className="percent-icon" alt="" src="/percent.svg" />
        </div>
        <div className="dss" onClick={onDSSContainerClick}>
          <div className="dss-child" />
          <div className="dss-moora">DSS MOORA</div>
          <img className="table-view-icon" alt="" src="/table-view.svg" />
        </div>
        <div className="peringkat" onClick={onPERINGKATContainerClick}>
          <img className="leaderboard-icon" alt="" src="/leaderboard.svg" />
          <div className="peringkat1">Peringkat</div>
          <div className="dss-child" />
        </div>
        <div className="navbar-menu-item" />
        <div className="menu">Menu</div>
      </div>
      <div className="head">
        <div className="head-child" />
        <b className="dss-destinasi-pendakian">{`DSS Destinasi Pendakian Optimal di Pulau Bali `}</b>
        <img className="logo-dss-1" alt="" src="/logo-dss-1@2x.png" />
      </div>
      <div className="criteria-weights">
        <div className="criteria-weights-child" />
        <div className="criteria-weights1">Criteria Weights</div>
        <div className="tingkat-kesulitan">
          <div className="tingkat-kesulitan1">{`Tingkat Kesulitan         `}</div>
          <div className="desimal">Desimal</div>
          <div className="div">:</div>
          <input
            className="tingkat-kesulitan-child"
            type="number"
            name="tingkatKesulitan"
            value={weights.tingkatKesulitan}
            onChange={handleChange}
          />
        </div>
        <div className="durasi">
          <div className="durasi-pendakian">Durasi Pendakian</div>
          <div className="div1">:</div>
          <input
            className="durasi-child"
            type="number"
            name="durasiPendakian"
            value={weights.durasiPendakian}
            onChange={handleChange}
          />
          <div className="desimal">Desimal</div>
        </div>
        <div className="pemandangan-alam">
          <div className="durasi-pendakian">{`Pemandangan Alam `}</div>
          <div className="div2">:</div>
          <input
            className="durasi-child"
            type="number"
            name="pemandanganAlam"
            value={weights.pemandanganAlam}
            onChange={handleChange}
          />
          <div className="desimal">Desimal</div>
        </div>
        <div className="aksesibilitas">
          <div className="aksesibilitas1">{`Aksesibilitas `}</div>
          <div className="div1">:</div>
          <input
            className="aksesibilitas-child"
            type="number"
            name="aksesibilitas"
            value={weights.aksesibilitas}
            onChange={handleChange}
          />
          <div className="desimal">Desimal</div>
        </div>
        <div className="biaya">
          <div className="div">:</div>
          <div className="biaya-rp">Biaya (Rp)</div>
          <input
            className="biaya-child"
            type="number"
            name="biaya"
            value={weights.biaya}
            onChange={handleChange}
          />
          <div className="desimal">Desimal</div>
        </div>
        <div className="keamanan">
          <div className="div">:</div>
          <div className="aksesibilitas1">Keamanan</div>
          <input
            className="biaya-child"
            type="number"
            name="keamanan"
            value={weights.keamanan}
            onChange={handleChange}
          />
          <div className="desimal">Desimal</div>
          <button className="save-button" onClick={saveWeights}>Save</button>
        </div>
        
      </div>
    </div>
  );
};

export default PEMBOBOTAN;
