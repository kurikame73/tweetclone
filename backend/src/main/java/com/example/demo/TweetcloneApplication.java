package com.example.demo;

import com.example.demo.domain.user.entity.User;
import com.example.demo.domain.user.repository.UserRepository;
import com.example.demo.domain.tweet.entity.Tweet;
import com.example.demo.domain.tweet.repository.TweetRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDateTime;

@SpringBootApplication
public class TweetcloneApplication {

	public static void main(String[] args) {
		SpringApplication.run(TweetcloneApplication.class, args);
	}

	@Bean
	public CommandLineRunner loadData(UserRepository userRepository, TweetRepository tweetRepository) {
		return (args) -> {
			// Create users
			User user1 = new User();
			user1.setUsername("user1");
			userRepository.save(user1);

			User user2 = new User();
			user2.setUsername("user2");
			userRepository.save(user2);

			// Create tweets
			Tweet tweet1 = new Tweet();
			tweet1.setContent("This is the first tweet!");
			tweet1.setCreatedAt(LocalDateTime.now());
			tweet1.setAuthor(user1);
			tweetRepository.save(tweet1);

			Tweet tweet2 = new Tweet();
			tweet2.setContent("Hello, this is another tweet.");
			tweet2.setCreatedAt(LocalDateTime.now());
			tweet2.setAuthor(user2);
			tweetRepository.save(tweet2);

			Tweet tweet3 = new Tweet();
			tweet3.setContent("Spring Boot is awesome!");
			tweet3.setCreatedAt(LocalDateTime.now());
			tweet3.setAuthor(user1);
			tweetRepository.save(tweet3);
		};
	}
}
