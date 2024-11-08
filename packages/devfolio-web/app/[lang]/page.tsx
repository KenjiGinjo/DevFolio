import type { PageProps } from '../types'
import { COLORS } from '@/assets/theme'
import { Button } from '@/components/ui/button'
import { dictionaries } from '@/dictionaries'
import { IconDottedCircle } from '@/icons'
import Link from 'next/link'
import '@/assets/style/home.css'

export default async function Page({ params }: PageProps) {
  const { lang } = await params
  const dict = await dictionaries.home[lang]()

  return (
    <div className="container">
      <main className="py-6 relative">
        <div className="h-full absolute left-4 md:left-20">
          <IconDottedCircle stroke={COLORS.border} className="absolute -left-10 top-6" />
          <div className="intro_line_relative_line" />
        </div>
        <div className="h-full absolute right-4 md:right-20">
          <div className="intro_line_relative_line" />
        </div>
        <div className="w-[55%] h-16 mx-auto flex justify-between md:w-[45%]">
          <div className="intro_line_container_line" />
          <div className="intro_line_container_line" />
        </div>
        <div className="intro-line text-center">
          <h1 className="text-2xl font-bold md:text-4xl p-4 md:p-6">Driven to Be a World-class Web Developer.</h1>
        </div>
        <div className="p-6 text-center">
          <p>
            Over 10 Years Designing and Developing, Clients Love.
          </p>
        </div>
        <div className="intro-line">
          <div className="w-[55%] h-24 mx-auto flex justify-between items-center md:w-[45%] relative">
            <div className="intro_line_container_relate_line" />
            <Button size="lg">Get in Touch</Button>
            <div className="intro_line_container_relate_line" />
            <IconDottedCircle stroke={COLORS.border} className="absolute -right-9 -bottom-9 rotate-180 animate-in" />
          </div>
        </div>
      </main>
      <main className="md:w-[80%] mx-auto py-12 mt-6 leading-relaxed">
        <h2 className="text-xl font-bold mt-4">About Me</h2>
        <p className="py-2">My name is Kenji Ginjo (My real name is Congkun Cui, but it’s difficult to pronounce), I'm from China. I specialize in building Minimum Viable Products (MVPs) that help entrepreneurs and businesses turn their ideas into viable market solutions from the ground up. My goal is to provide high-quality, low-risk development solutions for clients like you. Check out my portfolio to experience firsthand the level of expertise and extensive experience I bring to MVP development. 🎯</p>
        <p className="py-2">
          ⭐️⭐️⭐️⭐️⭐️ “Working with Kenji on our projects was an amazing experience. His professionalism, patience, and flexibility were evident throughout the project. The final product not only met our needs but also achieved success in the market.” ~
          {' '}
          <b>Principal, Yujia</b>
          {' '}
          (My esteemed client).
        </p>
        <p className="py-2">With over 10 years of experience collaborating with companies at all stages of development, I know how to deliver a top-quality MVP at a fraction of the cost of traditional agencies. I am the ideal developer for you if you’re looking for a responsive solution that meets market needs and delivers an outstanding user experience.</p>
        <h2 className="text-xl font-bold mt-4">My Development Process</h2>
        <p className="py-2">I excel in leading projects of all shapes and sizes, leveraging my extensive experience to make your development process transparent, logical, and enjoyable. My typical projects include:</p>
        <ul className="list-decimal list-inside">
          <li>
            <b>Requirement Analysis and Market Research</b>
            : Ensuring your product aligns with market demands and user expectations.
          </li>
          <li>Prototyping and User Testing: Utilizing rapid iteration and user feedback to ensure usability and appeal.  </li>
          <li>Agile Development and Continuous Integration: Employing agile methodologies to deliver usable product versions quickly, allowing for flexibility in response to changes.</li>
          <li>Ongoing Support and Optimization: Providing continuous technical support to help you optimize your product in the market.</li>
        </ul>
        <div className="my-2">
          <Link href="/contact" className="text-muted-foreground hover:text-primary">Click here if you would like to learn more about my development process.</Link>
        </div>

        <h2 className="text-xl font-bold mt-4">Services I Offer:</h2>
        <p className="py-2">My understanding of translating your brand and message into a successful product is based on years of hands-on experience.</p>
        <ul className="py-2">
          <li>✅ Comprehensive MVP Development</li>
          <li>✅ Responsive Design for Excellent Performance on All Devices</li>
          <li>✅ User Experience Design to Enhance Satisfaction</li>
          <li>✅ Market-Adaptable Technical Architecture</li>
          <li>✅ SEO Fundamentals and Technical Implementation</li>
          <li>✅ Transparent Communication and Feedback Mechanisms</li>
          <li>✅ Full Responsibility from Concept to Launch</li>
          <li>✅ Clear Instructions for Product Use and Maintenance</li>
          <li>✅ Customer Satisfaction as a Priority</li>
        </ul>
        <h2 className="text-xl font-bold mt-4">Why Choose Me?</h2>
        <ul className="py-2">
          <li>🔸 Fast and Efficient Results: Many clients come to me after trying unproven developers, ensuring you will launch a product you can be proud of without headaches.</li>
          <li>🔸 Fully Customized Designs: I provide unique solutions for each project, ensuring your product stands out in the market.</li>
          <li>🔸 Independence from Me: My development process is always transparent, allowing you to grasp every detail of the project and ensuring easy maintenance and updates.</li>
          <li>🔸 Cross-Disciplinary Expertise: I take responsibility for every detail of your project, ensuring consistent and effective communication of your message.</li>
        </ul>
        <h2 className="text-xl font-bold mt-4">My Areas of Expertise Include:</h2>
        <ul className="py-2">
          <li>🛠 Comprehensive MVP Development</li>
          <li>🛠 User Experience Design</li>
          <li>🛠 Agile Development and Project Management</li>
          <li>
            🛠 Technical Stack: HTML, CSS, JavaScript,
            {' '}
            <Link href="./" className="underline">you could know more...</Link>
          </li>
          <li>🛠 SEO Fundamentals and Technical Implementation</li>
          <li>🛠 Market Research and User Feedback Analysis</li>
        </ul>
        <p className="py-2">I look forward to being your partner on the path to success. Invite me to your project, and let’s turn your ideas into reality! 📞</p>
        <div>
          Best,
          Kenji Ginjo
        </div>
      </main>
    </div>
  )
}
