import { useEffect } from 'react'
import type { ReactNode } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { blogPosts, getBlogPost } from '../data/blogPosts'
import SiteNav from '../SiteNav'
import { BizTagline } from '../components/BizTagline'
import { Magnetic } from '../components/motion-primitives/Magnetic'
import { Spotlight } from '../components/motion-primitives/Spotlight'
import { GlowEffect } from '../components/motion-primitives/GlowEffect'
import aboutHero from '../assets/about-hero.webp'

function BlogShell({ children }: { children: ReactNode }) {
  return (
    <main className="inner-page biz-page">
      <SiteNav />
      {children}
      <section className="page-cta">
        <Spotlight size={520} />
        <span>NEED IMPLEMENTATION?</span>
        <h2>
          Turn insights into<br />
          <em>shipping software</em>
        </h2>
        <BizTagline align="left" />
        <Magnetic className="page-cta-magnetic">
          <div className="biz-glow-wrap">
            <GlowEffect colors={['#ffffff', '#8fbaff', '#1f6bff', '#ffffff']} />
            <Link className="biz-btn biz-btn-light biz-btn-lg" to="/contact">
              Talk to UpForge <ArrowRight />
            </Link>
          </div>
        </Magnetic>
      </section>
      <footer className="inner-footer">
        <Link to="/">
          <ArrowLeft /> Back home
        </Link>
        <span>© 2026 UPFORGE, TECHNOLOGY AGENCY & SOFTWARE HOUSE</span>
      </footer>
    </main>
  )
}

export function BlogPage() {
  return (
    <BlogShell>
      <section className="page-hero biz-page-hero page-hero-visual" data-index="05">
        <Spotlight size={560} />
        <div className="biz-hero-bg" aria-hidden="true">
          <span className="biz-beam biz-beam-one" />
          <span className="biz-beam biz-beam-two" />
          <span className="biz-dots" />
        </div>
        <div className="page-hero-image" aria-hidden="true">
          <img src={aboutHero} alt="" />
        </div>
        <div className="biz-page-copy">
          <div className="biz-kicker biz-kicker-sm">
            <span className="biz-kicker-line" />
            INSIGHTS & SEO
            <span className="biz-kicker-line" />
          </div>
          <h1>
            Guides on growth,<br />
            <em>SEO & engineering</em>
          </h1>
          <p>Practical articles for founders and operators on search, product delivery, and automation</p>
        </div>
      </section>
      <section className="blog-list-section">
        <div className="blog-list-grid">
          {blogPosts.map((post) => (
            <article className="blog-card" key={post.slug}>
              <Link to={`/blog/${post.slug}`} className="blog-card-image">
                <img src={post.heroImage} alt="" loading="lazy" />
              </Link>
              <div className="blog-card-body">
                <div className="blog-card-meta">
                  <span>
                    <Calendar size={14} aria-hidden /> {post.published}
                  </span>
                  <span>
                    <Clock size={14} aria-hidden /> {post.readMinutes} min read
                  </span>
                </div>
                <h2>
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p>{post.description}</p>
                <ul className="blog-card-tags">
                  {post.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <Link className="blog-card-link" to={`/blog/${post.slug}`}>
                  Read article <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </BlogShell>
  )
}

export function BlogPostPage() {
  const { slug = '' } = useParams()
  const post = getBlogPost(slug)
  if (!post) return <Navigate to="/blog" replace />

  useEffect(() => {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      datePublished: post.published,
      author: { '@type': 'Organization', name: 'UpForge', url: 'https://upforge.us' },
      publisher: { '@type': 'Organization', name: 'UpForge', url: 'https://upforge.us' },
      image: `https://upforge.us${post.heroImage}`,
      mainEntityOfPage: `https://upforge.us/blog/${post.slug}`,
    }
    const id = 'upforge-article-jsonld'
    let el = document.getElementById(id) as HTMLScriptElement | null
    if (!el) {
      el = document.createElement('script')
      el.id = id
      el.type = 'application/ld+json'
      document.head.appendChild(el)
    }
    el.textContent = JSON.stringify(data)
    return () => {
      el?.remove()
    }
  }, [post])

  return (
    <BlogShell>
      <article className="blog-article">
        <header className="blog-article-hero">
          <Link className="blog-back" to="/blog">
            <ArrowLeft size={16} /> All articles
          </Link>
          <div className="blog-card-meta">
            <span>
              <Calendar size={14} aria-hidden /> {post.published}
            </span>
            <span>
              <Clock size={14} aria-hidden /> {post.readMinutes} min read
            </span>
          </div>
          <h1>{post.title}</h1>
          <p className="blog-article-lead">{post.description}</p>
          <img className="blog-article-cover" src={post.heroImage} alt="" />
        </header>
        <div className="blog-article-prose">
          <ReactMarkdown>{post.body}</ReactMarkdown>
        </div>
        <div className="blog-article-cta">
          <p>Want help implementing this for your business?</p>
          <Link className="biz-btn biz-btn-primary" to="/contact">
            Get a free consultation <ArrowRight />
          </Link>
        </div>
      </article>
    </BlogShell>
  )
}
