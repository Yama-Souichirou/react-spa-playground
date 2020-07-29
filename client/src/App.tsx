import React from "react"

export class App extends React.Component {
  constructor(props: any) {
    super(props)
    this.fileInput = React.createRef()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    console.log(this)
    event.preventDefault()
    const submitData: FormData = new FormData()

    submitData.append("image", this.fileInput.current.files[0])

    fetch("http://localhost:3000/api/v1/posts", {
      method: "POST",
      headers: {
        "content-type": "multipart/form-data"
      },
      body: submitData
    }).then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div>
        <input type="file" ref={this.fileInput} accept="image/*" />
        <div>
          <button type="button" onClick={this.handleSubmit}>submit</button>
        </div>
      </div>
    )
  }
}
