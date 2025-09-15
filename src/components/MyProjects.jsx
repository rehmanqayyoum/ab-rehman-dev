import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const MyProjects = ({ projects }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 3;

    // Pagination logic
    const indexOfLast = currentPage * projectsPerPage;
    const indexOfFirst = indexOfLast - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(projects.length / projectsPerPage);

    return (
        <div>
            <div className="grid md:grid-cols-3 gap-8">
                {currentProjects.map((project, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow p-0 pb-5">
                        <div className="relative group">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-56 object-contain group-hover:scale-105 transition-transform"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                                <Button asChild variant="secondary">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        View Project
                                    </a>
                                </Button>
                            </div>
                        </div>

                        <CardHeader>
                            <CardTitle>
                                {project.title}
                                <span className="block mt-2 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, i) => (
                                    <Badge key={i} variant="outline">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="flex justify-center mt-8 space-x-2">
                {[...Array(totalPages)].map((_, i) => (
                    <button key={i} onClick={() => setCurrentPage(i + 1)}
                        className={`px-4 py-2 rounded-lg border transition ${currentPage === i + 1
                            ? "bg-primary text-white"
                            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MyProjects;