import React, { Component, ErrorInfo, ReactNode } from "react"
import styled from "styled-components";
import tw from "twin.macro";

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

const BoundaryTitle = styled.h2`
${tw`
  text-2xl
  font-abhaya
  font-semibold
  cursor-pointer
`}
`;

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(_: Error): State {
    
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught Error: ", error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return <BoundaryTitle>Что-то пошло не так</BoundaryTitle>
    }

    return this.props.children
  }
}

export default ErrorBoundary