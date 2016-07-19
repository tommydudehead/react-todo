var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return (
    <div>
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Test App
            </li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timerr</IndexLink>
            </li>
            <li>
              <Link to="/game" activeLink="active"  activeStyle={{fontWeight: 'bold'}}>Game</Link>
            </li>
            <li>
              <Link to="/questionpage" activeLink="active"  activeStyle={{fontWeight: 'bold'}}>Question</Link>
            </li>
            <li>
              <Link to="/algorithm" activeLink="active"  activeStyle={{fontWeight: 'bold'}}>Algorithm</Link>
            </li>
            <li>
              <Link to="/randombe" activeLink="active"  activeStyle={{fontWeight: 'bold'}}>Random</Link>
            </li>


          </ul>
        </div>
        <div className ="top-bar-right">

            <ul className="menu">
              <li className="menu-text">
                Created by <a href="" target="_blank">Matthew Smalley</a>
              </li>

            </ul>

        </div>
      </div>
    </div>
  );
};



module.exports = Nav;
