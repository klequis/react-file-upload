import React from 'react'
import { connect } from 'react-redux'
import * as imageActions from 'store/image-actions'
import * as imageSelectors from 'store/images-selectors'
import { green } from 'logger'
import { isNil } from 'ramda'

const wrapper = {
  padding: '30px',
  color: 'white',
}

class UploadImage extends React.Component {
  state = {
    currentImage: this.props.currentImage
  }
  handleSubmit = (event) => {
    event.preventDefault()
    // console.log('this.fileInput.files[0]', this.fileInput.files[0])
    let formData = new FormData()
    formData.append('upload', this.fileInput.files[0])
    this.props.requestUploadOneImage(formData)

  }

  handleGetClick = () => {
    this.props.requestGetTest()
  }

  currentImage = () => {
    const img = this.props.currentImage
    green('img', img)
    // green('img.Location', img.Location)
    if (isNil(img)) {
      green('currentImage: returning null')
      return null
    } else {
      green('currentImage: returning <img')
      return <img src={img} alt='uploaded image' />
    }

  }

  render() {
    return (
      <div style={wrapper}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Upload file:
            <input
              type="file"
              ref={input => {
                this.fileInput = input
              }}
              name='upload'
            />
          </label>
          <br />
          <button type="submit">Submit</button><br />
          <button type="button" onClick={this.handleGetClick}>GET</button>
        </form>
        {this.currentImage()}
        {/* <img src='https://photo-app-tvc.s3.us-west-2.amazonaws.com/img04.jpg' alt='last uploaded' /> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentImage: imageSelectors.getCurrentImage(state)
  }
}
export default connect(mapStateToProps, imageActions)(UploadImage)
