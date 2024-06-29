package com.example.demo.domain.tweet.service;

import com.example.demo.domain.tweet.entity.Tweet;
import com.example.demo.domain.tweet.repository.TweetRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@RequiredArgsConstructor
@Service
public class TweetService {
    private final TweetRepository tweetRepository;

    public List<Tweet> getAllTweets() {
        return tweetRepository.findAll();
    }

    public Tweet createTweet(@RequestBody Tweet tweet) {
        return tweetRepository.save(tweet);
    }
}
