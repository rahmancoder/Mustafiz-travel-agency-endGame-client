import React from 'react';

const TravelExperience = () => {
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>Traveler Name</th>
                        <th>Travel Experience</th>
                        <th>Favorite Places</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div class="flex items-center space-x-3">
                                <div class="avatar">
                                    <div class="w-12 h-12 mask mask-squircle">
                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">
                                        Hart Hagerty
                                    </div>
                                    <div class="text-sm opacity-50">
                                        United States
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Zemlak, Daniel and Leannon

                            <br />
                            <span class="badge badge-outline badge-sm">Desktop Support Technician</span>
                        </td>
                        <td>London</td>
                        <th>
                            <button class="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
                    <tr>

                        <td>
                            <div class="flex items-center space-x-3">
                                <div class="avatar">
                                    <div class="w-12 h-12 mask mask-squircle">
                                        <img src="/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">
                                        Brice Swyre
                                    </div>
                                    <div class="text-sm opacity-50">
                                        China
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Carroll Group

                            <br />
                            <span class="badge badge-outline badge-sm">Tax Accountant</span>
                        </td>
                        <td>United States</td>
                        <th>
                            <button class="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
                    <tr>

                        <td>
                            <div class="flex items-center space-x-3">
                                <div class="avatar">
                                    <div class="w-12 h-12 mask mask-squircle">
                                        <img src="/tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">
                                        Marjy Ferencz
                                    </div>
                                    <div class="text-sm opacity-50">
                                        Russia
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Rowe-Schoen

                            <br />
                            <span class="badge badge-outline badge-sm">Office Assistant I</span>
                        </td>
                        <td>Singapore</td>
                        <th>
                            <button class="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
                    <tr>

                        <td>
                            <div class="flex items-center space-x-3">
                                <div class="avatar">
                                    <div class="w-12 h-12 mask mask-squircle">
                                        <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">
                                        Yancy Tear
                                    </div>
                                    <div class="text-sm opacity-50">
                                        Brazil
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Wyman-Ledner

                            <br />
                            <span class="badge badge-outline badge-sm">Community Outreach Specialist</span>
                        </td>
                        <td>Indonesia,Bali</td>
                        <th>
                            <button class="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
                </tbody>

            </table>
        </div>
    );
};

export default TravelExperience;