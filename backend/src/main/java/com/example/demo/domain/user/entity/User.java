package com.example.demo.domain.user.entity;

import com.example.demo.domain.tweet.entity.Tweet;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
@Table(name = "app_user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String password;

    @OneToMany(mappedBy = "author")
    private List<Tweet> tweets;
}
