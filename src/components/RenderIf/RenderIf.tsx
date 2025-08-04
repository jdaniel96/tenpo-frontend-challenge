interface RenderIfProps {
  children: React.ReactNode
  shouldRender: boolean
}

export const RenderIf = ({ children, shouldRender }: RenderIfProps) =>
  shouldRender ? children : null
