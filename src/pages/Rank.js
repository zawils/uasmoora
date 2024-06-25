import React, { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Rank.css';

const Rank = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const rankedAlternatives = location.state?.rankedAlternatives || [];

  const onPembobotanContainerClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const onDSSContainerClick = useCallback(() => {
    navigate('/dss-moora');
  }, [navigate]);

  return (
    <div className="rank">
      <div className="dasar2" />
      <div className="navbar-menu2">
        <div className="navbar-menu-child1" />
        <div className="made-with-container2">
          <span>{`Made with `}</span>
          <span className="span2">❤</span>
          <span>️ by Kelompok 1</span>
        </div>
        <div className="pembobotan5" onClick={onPembobotanContainerClick}>
          <div className="pembobotan-inner" />
          <div className="pembobotan6">Pembobotan</div>
          <img className="percent-icon2" alt="" src="/percent.svg" />
        </div>
        <div className="dss2" onClick={onDSSContainerClick}>
          <div className="dss-inner" />
          <div className="dss-moora3">DSS MOORA</div>
          <img className="table-view-icon2" alt="" src="/table-view.svg" />
        </div>
        <div className="peringkat4">
          <img className="leaderboard-icon2" alt="" src="/leaderboard.svg" />
          <div className="peringkat5">Peringkat</div>
          <div className="peringkat-inner" />
        </div>
        <div className="navbar-menu-child2" />
        <div className="menu2">Menu</div>
      </div>
      <div className="head2">
        <div className="head-inner" />
        <b className="dss-destinasi-pendakian2">{`DSS Destinasi Pendakian Optimal di Pulau Bali `}</b>
        <img className="logo-dss-12" alt="" src="/logo-dss-1@2x.png" />
      </div>
      <div className="criteria-weights3">
        <div className="criteria-weights-inner">
          <table className='table-rank'>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Mountain</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {rankedAlternatives.map((alt, index) => (
                <tr key={alt.name}>
                  <td>{index + 1}</td>
                  <td>{alt.name}</td>
                  <td>{alt.score.toFixed(4)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Rank;
