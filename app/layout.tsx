import metadata from '@/meta'
import './globals.css'
import 'css-reset-plus'

export { metadata }
export default function ({ children }: any) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
