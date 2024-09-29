import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Mehmet Battal
      </h1>
      <p className="mb-4">
        {`I'm a math & cs major @ boston university. I'm fascinated by a lot of different topics, such as 
         fashion, programming, art, design, sports, longevity, etc. I would say I'm a jack of all trades
         master of none, which I don't believe is necessarily a bad thing. I have a great interest in creating
         anything that would bring significant impact and value to problems. I aim to create more than I consume.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
