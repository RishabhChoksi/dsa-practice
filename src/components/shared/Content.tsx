import React from 'react'
import styled from 'styled-components'

const StyledContent = styled('p')`
margin: 0;
padding: 0;
`


const Content = ({children}:any) => {
    let content:string = children.toString()
    
    const updateContent = (content:string) => {
        console.log(content)
        return content.replace("sample",`<span style="color: red;"> sample </span>`);
    }

    return (
    <StyledContent dangerouslySetInnerHTML={{ __html: updateContent(children) }}></StyledContent>
  )
}

export default Content