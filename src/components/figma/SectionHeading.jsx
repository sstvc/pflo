/**
 * 区块大标题:描边空心字 + 上下分割线。
 *
 * 传入的文字**照抄设计稿源文字**(稿中区块标题本身即大写),
 * 大小写转换由 .proj-heading h2 的 text-transform 负责。
 */
export default function SectionHeading({ children }) {
  return (
    <div className="proj-heading">
      <h2>{children}</h2>
    </div>
  )
}
