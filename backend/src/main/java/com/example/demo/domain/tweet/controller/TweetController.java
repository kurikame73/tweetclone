package com.example.demo.domain.tweet.controller;

import com.example.demo.domain.tweet.entity.Tweet;
import com.example.demo.domain.tweet.repository.TweetRepository;
import com.example.demo.domain.tweet.service.TweetService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tweets")
@RequiredArgsConstructor
public class TweetController {
    private final TweetService tweetService;
    private final TweetRepository tweetRepository;

    @GetMapping
    public List<Tweet> getAllTweets() {
        return tweetService.getAllTweets();
    }

    @PostMapping
    public Tweet createTweet(@RequestBody Tweet tweet) {
        return tweetService.createTweet(tweet);
    }
}
