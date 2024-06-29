package com.example.demo.domain.tweet.repository;

import com.example.demo.domain.tweet.entity.Tweet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TweetRepository extends JpaRepository<Tweet, Long> {
}
