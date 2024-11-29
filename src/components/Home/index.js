import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {isSaved: false, inp: ''}
  ongivinginp = event => {
    this.setState({inp: event.target.value})
  }
  onSaveOrEdit = () => {
    this.setState(prev => ({isSaved: !prev.isSaved}))
  }
  render() {
    const {isSaved, inp} = this.state
    return (
      <div className="home-container">
        <div className="card-container">
          <h1>Editable Text Input</h1>
          {isSaved ? (
            <div className="inputandbtn">
              <p>{inp}</p>
              <button className="btn" onClick={this.onSaveOrEdit}>
                Edit
              </button>
            </div>
          ) : (
            <>
              <input type="text" value={inp} onChange={this.ongivinginp} />
              <button className="btn" onClick={this.onSaveOrEdit}>
                Save
              </button>
            </>
          )}
        </div>
      </div>
    )
  }
}
export default Home
