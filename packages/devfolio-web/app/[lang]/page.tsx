import type { PageProps } from '../types'
import { COLORS } from '@/assets/theme'
import { Button } from '@/components/ui/button'
import { dictionaries } from '@/dictionaries'
import { IconDottedCircle } from '@/icons'

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
        <div className="">
          <div className="w-[55%] h-16 mx-auto flex justify-between md:w-[45%]">
            <div className="intro_line_container_line" />
            <div className="intro_line_container_line" />
          </div>
          <div className="intro intro_line text-center">
            <h1 className="text-2xl font-bold md:text-4xl p-4 md:p-6">World-Class Minimum Viable Product Development</h1>
          </div>
          <div className="p-6 text-center">
            <p>
              10 Years Designing and Developing Websites Clients Love
            </p>
          </div>
          <div className="intro intro_line">
            <div className="w-[55%] h-24 mx-auto flex justify-between items-center md:w-[45%] relative">
              <div className="intro_line_container_relate_line" />
              <Button size="lg">Get in Touch</Button>
              <div className="intro_line_container_relate_line" />
              <IconDottedCircle stroke={COLORS.border} className="absolute -right-9 -bottom-9 rotate-180 animate-in " />
            </div>
          </div>
        </div>
      </main>

      {dict.hi}
      <div>
        <p>I specialize in building Minimum Viable Products (MVPs) that help entrepreneurs and businesses turn their ideas into viable market solutions from the ground up. My goal is to provide high-quality, low-risk development solutions for clients like you. Check out my portfolio to experience firsthand the level of expertise and extensive experience I bring to MVP development. 🎯</p>

        <p>⭐️⭐️⭐️⭐️⭐️ “Working with Kenji on our MVP was an amazing experience. His professionalism, patience, and flexibility were evident throughout the project. The final product not only met our needs but also achieved success in the market.” ~ Client Feedback</p>
        <p>With over 10 years of experience collaborating with companies at all stages of development, I know how to deliver a top-quality MVP at a fraction of the cost of traditional agencies. I am the ideal developer for you if you’re looking for a responsive solution that meets market needs and delivers an outstanding user experience.</p>
      </div>
      <div>
        <h1>My MVP Development Process</h1>
        <p>I excel in leading projects of all shapes and sizes, leveraging my extensive experience to make your MVP development process transparent, logical, and enjoyable. My typical projects include:</p>
        <ul>
          <li>Requirement Analysis and Market Research: Ensuring your product aligns with market demands and user expectations.</li>
          <li>Prototyping and User Testing: Utilizing rapid iteration and user feedback to ensure usability and appeal.  </li>
          <li>Agile Development and Continuous Integration: Employing agile methodologies to deliver usable product versions quickly, allowing for flexibility in response to changes.</li>
          <li>Ongoing Support and Optimization: Providing continuous technical support to help you optimize your product in the market.</li>
        </ul>
      </div>
      <div>
        <h1>Services I Offer:</h1>
        <ul>
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
        <p>My understanding of translating your brand and message into a successful MVP is based on years of hands-on experience and a solid academic background. I graduated from a prestigious university, where I studied user behavior and market trends, ensuring every project’s success.</p>
      </div>
      <div>
        <h1>Why Choose Me?</h1>
        <ul>
          <li>🔸 Fast and Efficient Results: Many clients come to me after trying unproven developers, ensuring you will launch a product you can be proud of without headaches.</li>
          <li>🔸 Fully Customized Designs: I provide unique solutions for each project, ensuring your MVP stands out in the market.</li>
          <li>🔸 Independence from Me: My development process is always transparent, allowing you to grasp every detail of the project and ensuring easy maintenance and updates.</li>
          <li>🔸 Cross-Disciplinary Expertise: I take responsibility for every detail of your project, ensuring consistent and effective communication of your message.</li>
        </ul>
      </div>
      <div>
        <h1>My Areas of Expertise Include:</h1>
        <ul>
          <li>🛠 Comprehensive MVP Development</li>
          <li>🛠 User Experience Design</li>
          <li>🛠 Agile Development and Project Management</li>
          <li>🛠 Technical Stack: HTML5, CSS3, JavaScript, PHP</li>
          <li>🛠 SEO Fundamentals and Technical Implementation</li>
          <li>🛠 Market Research and User Feedback Analysis</li>
        </ul>
        <p>I look forward to being your partner on the path to success. Invite me to your project, and let’s turn your ideas into reality! 📞</p>
      </div>
      <div>
        Best,
        [Your Name]
      </div>
    </div>
  )
}
