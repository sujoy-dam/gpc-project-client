import React from 'react';

const AboutUs = () => {
    return (
        <section className="bg-gradient-to-br min-h-screen from-rose-100 to-rose-200 text-gray-800 py-16 px-6 md:px-20">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-rose-700 mb-10">
                    🐾 About Guardians of Paws and Claws - GPC
                </h1>
                <p className="text-lg leading-8 mb-10 text-center italic">
                    A Voice for the Voiceless | A Home for the Hopeless | A Family for the Forgotten
                </p>

                <div className="space-y-8 text-base leading-7">
                    <section>
                        <h2 className="text-2xl font-semibold text-rose-600">🌟 Introduction</h2>
                        <p>
                            Guardians of Paws and Claws (GPC) is a compassionate community from Bangladesh
                            dedicated to rescuing and caring for stray, abandoned, and abused animals.
                            More than just a Facebook group, GPC is a movement built on love,
                            courage, and commitment to voiceless souls.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-rose-600">🐶 Our Mission</h2>
                        <p>
                            To protect, rescue, rehabilitate, and rehome vulnerable animals while
                            spreading awareness about compassion, empathy, and responsibility.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-rose-600">🐱 Our Vision</h2>
                        <ul className="list-disc pl-5">
                            <li>A safer environment for street animals</li>
                            <li>Ethical treatment and awareness of animal rights</li>
                            <li>A supportive network of volunteers and supporters</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-rose-600">🛡️ What We Do</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Rescue Operations:</strong> Saving injured and abused animals daily.</li>
                            <li><strong>Medical Care:</strong> Vaccinations, treatments, surgeries, and more.</li>
                            <li><strong>Adoption:</strong> Rehoming rescued pets with loving families.</li>
                            <li><strong>Awareness Campaigns:</strong> Educating people about animal rights.</li>
                            <li><strong>Feeding Programs:</strong> Providing food to street animals in need.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-rose-600">💬 Our Community</h2>
                        <p>
                            GPC is a vibrant network of volunteers, donors, and adopters. The Facebook group
                            serves as a hub to coordinate rescues, share stories, and spread love for animals.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-rose-600">🧡 Volunteers</h2>
                        <p>
                            Volunteers are GPC’s backbone — they rescue, foster, raise funds, and educate
                            others about kindness and care.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-rose-600">💰 Funding</h2>
                        <p>
                            GPC runs entirely on community support through donations, volunteer
                            contributions, and crowdfunding campaigns.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-rose-600">🐾 Success Stories</h2>
                        <p>
                            Each rescued animal has a powerful story — from abandoned kittens to injured dogs,
                            GPC changes lives every single day.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-rose-600">🚫 Challenges</h2>
                        <p>
                            GPC faces obstacles like lack of funds, limited shelter space, and
                            public resistance. Yet, the mission never stops.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-rose-600">🌍 Get Involved</h2>
                        <ul className="list-disc pl-5">
                            <li>Volunteer or foster an animal</li>
                            <li>Donate money or supplies</li>
                            <li>Adopt a rescued pet</li>
                            <li>Share our mission online</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-rose-600">📲 Connect with Us</h2>
                        <p>
                            Join our Facebook community: {" "}
                            <a
                                href="https://www.facebook.com/groups/530950651223157"
                                className="text-rose-700 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Guardians of Paws and Claws - GPC
                            </a>
                        </p>
                    </section>

                    <section className="bg-rose-100 rounded-xl p-6 mt-10 shadow-md">
                        <h2 className="text-2xl font-bold text-rose-700 mb-4">❤️ Final Words</h2>
                        <p>
                            GPC is more than just an organization — it is a family. We stand as a voice
                            for the voiceless, a home for the forgotten, and a movement for change.
                            With every rescue, every adoption, every meal served, we are building
                            a kinder Bangladesh.
                        </p>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;