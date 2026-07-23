"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MOCK_BLOGS } from "@/data/mockBlogs";
import { Sparkles, Search, Clock, ArrowRight, Tag } from "lucide-react";

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredBlogs = MOCK_BLOGS.filter((b) => {
    if (selectedCategory !== "ALL" && b.category !== selectedCategory) return false;
    if (search && !b.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase font-mono text-gold-400 tracking-widest flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Market Intelligence & Insights
        </span>
        <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-white">
          The Private Journal
        </h1>
        <p className="text-sm text-neutral-400 font-light">
          Architectural analysis, luxury lifestyle trends, and global real estate wealth preservation strategies.
        </p>
      </div>

      {/* Search Bar & Categories */}
      <div className="glass-panel p-6 rounded-2xl border border-gold-400/20 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-96">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search market insights..."
            className="w-full bg-dark-100 border border-gold-400/20 rounded-xl px-4 py-2.5 pl-10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400"
          />
          <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto">
          {["ALL", "Architecture & Design", "Market Insights", "Luxury Lifestyle"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider shrink-0 transition-all ${
                selectedCategory === cat
                  ? "bg-gold-400 text-dark-400"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredBlogs.map((blog) => (
          <article
            key={blog.id}
            className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group"
          >
            <div className="relative h-60 overflow-hidden bg-dark-300">
              <Image
                src={blog.coverImage}
                alt={blog.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-400 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 text-[10px] font-mono uppercase px-3 py-1 rounded-full bg-dark-400/80 backdrop-blur-md text-gold-400 border border-gold-400/30">
                {blog.category}
              </span>
            </div>

            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-400">
                  <Clock className="w-3 h-3 text-gold-400" />
                  <span>{blog.readTime}</span>
                  <span>•</span>
                  <span>{blog.publishedAt}</span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-white group-hover:text-gold-300 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-xs text-neutral-400 font-light line-clamp-3">
                  {blog.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] text-neutral-500 font-mono">By {blog.author}</span>
                <Link
                  href={`/blog`}
                  className="flex items-center gap-1 text-xs text-gold-400 font-semibold uppercase tracking-wider hover:underline"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
