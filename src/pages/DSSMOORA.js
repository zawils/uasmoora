import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './DSSMOORA.css';

const DSSMOORA = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [criteria, setCriteria] = useState([
    { name: "Gunung Agung", values: { tingkatKesulitan: "", durasiPendakian: "", pemandanganAlam: "", aksesibilitas: "", biaya: "", keamanan: "" }},
    { name: "Gunung Batur", values: { tingkatKesulitan: "", durasiPendakian: "", pemandanganAlam: "", aksesibilitas: "", biaya: "", keamanan: "" }},
    { name: "Gunung Batukaru", values: { tingkatKesulitan: "", durasiPendakian: "", pemandanganAlam: "", aksesibilitas: "", biaya: "", keamanan: "" }},  
    { name: "Gunung Abang", values: { tingkatKesulitan: "", durasiPendakian: "", pemandanganAlam: "", aksesibilitas: "", biaya: "", keamanan: "" }},  
    { name: "Gunung Catur", values: { tingkatKesulitan: "", durasiPendakian: "", pemandanganAlam: "", aksesibilitas: "", biaya: "", keamanan: "" }},    
    { name: "Gunung Lempuyang", values: { tingkatKesulitan: "", durasiPendakian: "", pemandanganAlam: "", aksesibilitas: "", biaya: "", keamanan: "" }}, 
    { name: "Gunung Merbuk", values: { tingkatKesulitan: "", durasiPendakian: "", pemandanganAlam: "", aksesibilitas: "", biaya: "", keamanan: "" }},
    { name: "Gunung Lesung", values: { tingkatKesulitan: "", durasiPendakian: "", pemandanganAlam: "", aksesibilitas: "", biaya: "", keamanan: "" }},
    { name: "Gunung Pandan", values: { tingkatKesulitan: "", durasiPendakian: "", pemandanganAlam: "", aksesibilitas: "", biaya: "", keamanan: "" }},  
    { name: "Gunung Mesehe", values: { tingkatKesulitan: "", durasiPendakian: "", pemandanganAlam: "", aksesibilitas: "", biaya: "", keamanan: "" }},  
    { name: "Gunung Seraya", values: { tingkatKesulitan: "", durasiPendakian: "", pemandanganAlam: "", aksesibilitas: "", biaya: "", keamanan: "" }},
    { name: "Gunung Adeng", values: { tingkatKesulitan: "", durasiPendakian: "", pemandanganAlam: "", aksesibilitas: "", biaya: "", keamanan: "" }},

    // add other mountains similarly
  ]);

  const [weights, setWeights] = useState({ 
    tingkatKesulitan: 0.2,
    durasiPendakian: 0.2,
    pemandanganAlam: 0.15,
    aksesibilitas: 0.15,
    biaya: 0.2,
    keamanan: 0.1,
  });

  useEffect(() => {
    const savedWeights = JSON.parse(localStorage.getItem('criteriaWeights'));
    if (savedWeights) {
      setWeights(savedWeights);
    }
  }, []);

  const handleChange = (e, index, field) => {
    const value = field === 'biaya' ? parseInt(e.target.value, 10) : Math.min(Math.max(parseInt(e.target.value, 10), 1), 5);
    setCriteria(prev => {
      const newCriteria = [...prev];
      newCriteria[index].values[field] = value;
      return newCriteria;
    });
  };

  const onPembobotanContainerClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const onPERINGKATContainerClick = useCallback(() => {
    navigate('/rank');
  }, [navigate]);

  const calculateMOORA = () => {
    const alternatives = criteria.map(({ name, values }) => {
      const valuesArray = Object.values(values);
      return { name, values: valuesArray };
    });

    const sumSquares = criteria.reduce((acc, { values }) => {
      return Object.keys(values).reduce((innerAcc, key, index) => {
        innerAcc[index] = (innerAcc[index] || 0) + Math.pow(values[key], 2);
        return innerAcc;
      }, acc);
    }, {});

    const normalizedMatrix = alternatives.map((alt) => {
      const normalizedValues = alt.values.map((value, index) => {
        return value / Math.sqrt(sumSquares[index]);
      });
      return { ...alt, normalizedValues };
    });

    const weightedMatrix = normalizedMatrix.map((alt) => {
      const weightedValues = alt.normalizedValues.map((value, index) => value * Object.values(weights)[index]);
      return { ...alt, weightedValues };
    });

    const scores = weightedMatrix.map((alt) => {
      const benefitIndices = [2, 3, 5]; // Indices of pemandanganAlam, aksesibilitas, keamanan
      const costIndices = [0, 1, 4]; // Indices of tingkatKesulitan, durasiPendakian, biaya

      const benefitSum = benefitIndices.reduce((sum, index) => sum + alt.weightedValues[index], 0);
      const costSum = costIndices.reduce((sum, index) => sum + alt.weightedValues[index], 0);

      const score = benefitSum - costSum;
      return { ...alt, score };
    });

    const rankedAlternatives = scores.sort((a, b) => b.score - a.score);

    navigate('/rank', { state: { rankedAlternatives } });
  };

  return (
    <div className="dss-moora1">
      <div className="dasar1" />
      <div className="navbar-menu1">
        <div className="navbar-menu-inner" />
        <div className="made-with-container1">
          <span>{`Made with `}</span>
          <span className="span1">❤</span>
          <span>️ by Kelompok 1</span>
        </div>
        <div className="pembobotan3" onClick={onPembobotanContainerClick}>
          <div className="pembobotan-item" />
          <div className="pembobotan4">Pembobotan</div>
          <img className="percent-icon1" alt="" src="/percent.svg" />
        </div>
        <div className="dss1">
          <div className="dss-item" />
          <div className="dss-moora2">DSS MOORA</div>
          <img className="table-view-icon1" alt="" src="/table-view.svg" />
        </div>
        <div className="peringkat2" onClick={onPERINGKATContainerClick}>
          <img className="leaderboard-icon1" alt="" src="/leaderboard.svg" />
          <div className="peringkat3">Peringkat</div>
          <div className="peringkat-item" />
        </div>
        <div className="rectangle-div" />
        <div className="menu1">Menu</div>
      </div>
      <div className="head1">
        <div className="head-item" />
        <b className="dss-destinasi-pendakian1">{`DSS Destinasi Pendakian Optimal di Pulau Bali `}</b>
        <img className="logo-dss-11" alt="" src="/logo-dss-1@2x.png" />
      </div>
      <div className="criteria-weights2">
        <div className="criteria-weights-item">
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Mountain</th>
                  <th>Tingkat Kesulitan</th>
                  <th>Durasi Pendakian</th>
                  <th>Pemandangan Alam</th>
                  <th>Aksesibilitas</th>
                  <th>Biaya (Rp)</th>
                  <th>Keamanan</th>
                </tr>
              </thead>
              <tbody>
                {criteria.map((mountain, index) => (
                  <tr key={mountain.name}>
                    <td>{mountain.name}</td>
                    {Object.keys(mountain.values).map((field) => (
                      <td key={field}>
                        <input
                          type="number"
                          value={mountain.values[field]}
                          min={field === 'biaya' ? '0' : '1'}
                          max={field === 'biaya' ? undefined : '5'}
                          step={field === 'biaya' ? '1000' : '1'}
                          onChange={(e) => handleChange(e, index, field)}
                          required
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className='save-button-dss' onClick={calculateMOORA}>Calculate</button>
        </div>
      </div>
    </div>
  );
};

export default DSSMOORA;