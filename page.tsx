import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Home() {
  return (
    <div className="text-white p-8 max-w-3xl mx-auto">
      <main className="space-y-8">
        {/* Header */}
        <h1 className="text-4xl font-bold">Om Dhomne</h1>

        {/* Bio */}
        <p className="text-gray-300">
          Freshman at IIT Madras based in India. You can find me on{' '}
          <Link href="https://github.com/omd-git-good" className="text-blue-400 hover:underline">
            GitHub
          </Link>
          ,{' '}
          <Link href="https://www.linkedin.com/in/om-dhomne-81811831a/" className="text-blue-400 hover:underline">
            LinkedIn
          </Link>
          , or send me an{' '}
          <Link href="mailto:omdhomne7@gmail.com" className="text-blue-400 hover:underline">
            email
          </Link>
          .
        </p>

        {/* Blog Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Blog</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/blog/post-1" className="text-blue-400 hover:underline">
                The IIT dreaM
              </Link>
            </li>
            <li>
              <Link href="/blog/post-2" className="text-blue-400 hover:underline">
                My Journey in Tech
              </Link>
            </li>
            <li>
              <Link href="/blog/post-3" className="text-blue-400 hover:underline">
                Latest Updates
              </Link>
            </li>
          </ul>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <ul className="space-y-4">
            <li>
              <div className="space-y-1">
                <p>
                  Built edtech startup for BuildSchool 5.0, a innovative product building competition. Check out{' '}
                  <Link href="https://aarambhlearn.wordpress.com/" className="text-blue-400 hover:underline">
                    Aarambh
                  </Link>
                </p>
              </div>
            </li>
          </ul>
        </section>

        {/* Social Links */}
        <div className="flex gap-4 text-gray-400">
          <Link href="https://github.com/omd-git-good" className="hover:text-white">
            <Github className="w-6 h-6" />
          </Link>
          <Link href="https://www.linkedin.com/in/om-dhomne-81811831a/" className="hover:text-white">
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link href="mailto:omdhomne7@gmail.com" className="hover:text-white">
            <Mail className="w-6 h-6" />
          </Link>
        </div>
      </main>
    </div>
  )
}

