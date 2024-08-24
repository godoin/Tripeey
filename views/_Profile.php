<main>

    <section class="settings">
        <h1>Settings</h1>
    
        <div class="alignment">

            <ul class="tabs">
                <li class="tab" active>My Profile</li>
                <li class="tab">Security</li>
                <li class="tab">Favorites</li>
                <li class="tab">Privacy</li>
                <li class="tab">Billing</li>
                <li class="tab">Notification</li>
                <li class="tab">
                    <img src="assets/images/icons/logout.svg" alt="Logout">
                    <span>Logout</span>
                </li>
            </ul>

            <form class="content">
        
                <div class="background">
                    <div class="profile">
        
                        <div class="profile-group">
                            <div class="img-wrapper">
                                <img src="assets/images/godoin.jpg" class="profile-img" alt="">
                            </div>
                            <header>
                                <h2>Profile</h2>
                                <p>Update your personal information</p>
                            </header>
                        </div>

                        <div class="actions">
                            <button type="submit" class="primary">Save</button>
                        </div>
        
                    </div>
                </div>

                <div class="fields">

                    <div class="field">
                        <label for="username">Username*</label>
                        <div class="input-wrapper">
                            <span>tripeey.com/</span>
                            <input type="text" name="username" id="username" placeholder="e.g., johndave01" required>
                        </div>
                    </div>
                    
                    <div class="group">
                        <label for="full_name">Full Name*</label>
                        <div class="group-item">
                            <div class="field grouped no-border">
                                <div class="input-wrapper">
                                    <span>First Name:</span>
                                    <input type="text" name="first_name" id="first_name" placeholder="e.g., John" required>
                                </div>
                            </div>
                            <div class="field grouped no-border">
                                <div class="input-wrapper">
                                    <span>Last Name:</span>
                                    <input type="text" name="last_name" id="last_name" placeholder="e.g., Dave" required>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="field">
                        <label for="email">Email*</label>
                        <div class="input-wrapper">
                            <img src="assets/images/icons/envelope.svg" class="icon" alt="Email">
                            <input type="email" name="email" id="email" placeholder="e.g., johndave@test.com" required>
                        </div>
                    </div>

                    <div class="field img">
                        <div class="description">
                            <label for="image_url">Your Photo</label>
                            <p>Upload your profile picture. Accepted formats include JPEG, PNG, and JPG.</p>
                        </div>
                        <div class="right-group">
                            <div class="img-group">
                                <div class="img-wrapper">
                                    <img src="assets/images/godoin.jpg" class="profile-img" alt="">
                                </div>
                                <h4>godoin.jpg</h4>
                            </div>
                            <div class="actions">
                                <button class="outline">Update</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="field textarea">
                        <div class="description">
                            <label for="image_url">Your Bio</label>
                            <p>Add or edit a brief description about yourself to share with others.</p>
                        </div>
                        <div class="right-group">
                            <div class="text-group">
                                <ul class="text-actions">
                                    <li class="ghost">
                                        <img src="assets/images/icons/bold-02.svg" alt="Bold">
                                    </li>
                                    <li class="ghost">
                                        <img src="assets/images/icons/italic-01.svg" alt="Italic">
                                    </li>
                                    <li class="ghost">
                                        <img src="assets/images/icons/align-left.svg" alt="Left Align Text">
                                    </li>
                                    <li class="ghost">
                                        <img src="assets/images/icons/align-center.svg" alt="Center Align Text">
                                    </li>
                                    <li class="ghost">
                                        <img src="assets/images/icons/align-right.svg" alt="Right Align Text">
                                    </li>
                                </ul>
                                <textarea name="bio" id="bio" placeholder="Type something about you..." cols="30" rows="10"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="field img">
                        <div class="description">
                            <label for="image_url">Delete Account</label>
                            <p>Permanently delete your account and all associated data. This action is irreversible, so proceed with caution..</p>
                        </div>
                        <div class="right-group">
                            <div class="actions">
                                <button class="error">Delete</button>
                            </div>
                        </div>
                    </div>

                </div>
            </form>
        </div>

    </section>
</main>